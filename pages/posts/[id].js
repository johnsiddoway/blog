import Head from 'next/head';
import Script from 'next/script';
import { Date } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    var script = postData.customJavascript
        ? <Script src={postData.customJavascript}/>
        : undefined;
    var style = postData.customStylesheet
        ? <link rel="stylesheet" href={postData.customStylesheet} />
        : undefined;
    return <>
        <Head>
            <title>{postData.title}</title>
        </Head>
        {script}
        {style}
        <article>
            <h1>{postData.title}</h1>
            <small>
                <Date dateString={postData.date} />
            </small>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </>;
}
