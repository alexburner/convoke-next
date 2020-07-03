import { NextPage, GetServerSideProps } from "next";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import { ReactNode } from "react";
import gql from "graphql-tag";

import { getMetadata, Metadata } from "../../util/prismic";
import { PageHead } from "../../components/PageHead";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const metadata = await getMetadata();
  if (!metadata) throw new Error("Couldn't find metadata");
  return { props: { metadata } };
};

interface Article {
  title: unknown;
  body: unknown;
  author: string | null;
  date: string | null;
}

const getQuery = (uid: string) => gql`
  query{
    allArticles(uid:"${uid}"){
      edges{
        node{
          title
          body
          author
          date
        }
      }
    }
  }
`;

const extractArticle = (data: any): Article | undefined =>
  data?.allArticles?.edges?.[0]?.node;

const Article: NextPage<{ metadata: Metadata }> = ({ metadata }) => {
  const router = useRouter();
  const { uid } = router.query;
  const { loading, error, data } = useQuery(
    getQuery(typeof uid === "string" ? uid : "")
  );

  let content: ReactNode = null;

  if (loading) {
    content = (
      <div className="has-text-centered">
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    );
  } else if (error) {
    content = (
      <div className="has-text-centered">
        <h4>Error!</h4>
        <pre>{error.message}</pre>
      </div>
    );
  } else {
    const article = extractArticle(data);
    content = (
      <div className="content">
        {article?.title && (
          <div className="title is-1">{RichText.asText(article.title)}</div>
        )}
        {article?.body && <RichText render={article.body} />}
        {article?.date && (
          <small className="is-italic">Posted {article.date}</small>
        )}
        {article?.author && article?.date && <br />}
        {article?.author && (
          <small className="is-italic">By {article.author}</small>
        )}
      </div>
    );
  }

  return (
    <section className="section subpage">
      <PageHead metadata={metadata} name="Article" />
      <div className="container">
        <Breadcrumbs
          crumbs={[
            { text: "Home", href: "/" },
            { text: "Content", href: "/content" },
            { text: "Article", href: "#" },
          ]}
        />
        {content}
      </div>
    </section>
  );
};

export default Article;
