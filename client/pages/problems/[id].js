import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef } from 'react';
import Footer from '../../src/components/common/Footer';
import Header from '../../src/components/common/Header';
import { getAllProblemIds, getEditorialData } from '../../lib/problems';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '../../src/components/editorials/Layout';

export default class Editorial extends React.Component {
    constructor(props) {
        super(props);
        this.languages = {
            'cpp': 'C++',
            'c': 'C',
            'java': 'Java',
            'py': 'Python'
        }
        this.editorLanguages = {
            'cpp': 'cpp',
            'c': 'cpp',
            'java': 'java',
            'py': 'python'
        }
        this.state = {
            selectedLanguage: null
        }
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }
    componentDidMount(){
        this.setState({
            selectedLanguage: Object.keys(this.props.editorialData.solutions)[0]
        })
    }

    handleLanguageChange(selectedLanguage){                
        this.setState({
            selectedLanguage
        })
    }

    render() {
        let solutionCode = '';        
        if(this.state.selectedLanguage != null)
            solutionCode = this.props.editorialData.solutions[this.state.selectedLanguage];
        // ref={containerRef}
        // containerRef={containerRef}
        return (
            <>
             <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Layout>
            <Box>
                <Header />
                <button type="button" className="btn btn-link editorial-link">
                    <a href={this.props.editorialData.problemData.problem_url} target="_blank">View Problem</a>
                </button>
                <div className="jumbotron">
                    <div dangerouslySetInnerHTML={{ __html: this.props.editorialData.editorial }} />
                </div>
                <ul className="nav nav-tabs">
                    {
                        Object.keys(this.props.editorialData.solutions).map( lang => (
                            <button>
                            <li key={lang} className="nav-item" onClick={() => {this.handleLanguageChange(lang)}}>
                                <a className={`nav-link ${lang == this.state.selectedLanguage ? 'active' : ''}`} 
                                   data-toggle="tab">
                                       { this.languages[lang] }
                                </a>
                            </li>
                            </button>
                        ))
                    }
                </ul>
                <SyntaxHighlighter showLineNumbers={true} language={this.editorLanguages[this.state.selectedLanguage]}>
                    { solutionCode }
                </SyntaxHighlighter>
                <Footer />
            </Box>
            </Layout>
            </>
        );
    }    
};

export async function getStaticPaths() {
    const paths = getAllProblemIds();
    return {
        paths,
        fallback: false
    }
} 


export async function getStaticProps({ params }) {
    const editorialData = await getEditorialData(params.id);
    return {
        props: {
            editorialData
        }
    }
}