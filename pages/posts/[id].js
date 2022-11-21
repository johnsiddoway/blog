import Head from 'next/head';
import Script from 'next/script';
import { Date } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const environmentVariable = process.env.TEST_VARIABLE;
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
            environmentVariable
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

export default function Post({ postData, environmentVariable }) {
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
            <div className="d-flex border-bottom border-dark mb-2 pb-2">
                <h1 className="mb-0">{postData.title}</h1>
                <div className="ms-auto mt-auto">
                    <Date dateString={postData.date} />
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </>;
}
