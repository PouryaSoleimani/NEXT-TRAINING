//^ DYNAMIC PAGE SINGLE
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { }

// COMPONENT
const DynamicApiSingle: NextPage<Props> = ({ }) => {
    return <div></div>
}



//STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    }
}

//STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {},
    }
}
export default DynamicApiSingle