import React, {useState} from "react";
import { Button, Content, DataContent, Error, Image, Input, InputContent, ResponseContent, Wrapper } from "./Home.styles";

const Home = ()=>{

    const [url, setUrl] = useState('')
    const [data, setData] = useState('')
    const [error, setError] = useState('')

    const analyze = ()=>{
        setData('')
        setError('')
        const body = JSON.stringify({url})
        console.log(body)
        try {
               fetch('http://127.0.0.1:8000/sentiment/sentiment/', {
                    method: 'POST',
                    body: body,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }).then(res => {
                    if (res.ok){
                        return res.json()
                    } else {
                        throw res.json()
                    }
                    
                }).then(json =>{
                    console.log(json)
                    setData(json)
                    setError('')
                   
    
                }).catch(error =>{
                    console.log(error)
                    setData('')
                    setError('Cannot show the analysis')
                    
                });
    
                
            } catch (error) {
                console.log(error)
            }
    }
    return(
        <Wrapper>
            <Content>
                     <h1>{data?.title}</h1>
                <DataContent>

                    {data===''? null: <ResponseContent>
                   
                    <h2>Sentiment analysis result</h2>
                    <h3>Positive: {data?.sentiment_result?.pos}</h3>
                    <h3>Neutral: {data?.sentiment_result?.neu}</h3>
                    <h3>Negative: {data?.sentiment_result?.neg}</h3>
                    <h3>Compound: {data?.sentiment_result?.compound}</h3>
                    <h3>Overall: {data?.sentiment_result?.overall_sentiment}</h3>
                </ResponseContent>}
                   

                <Image src={data?.image}/>
                </DataContent>

                

                <InputContent>
                    <Input value={url} onChange={(e)=>setUrl(e.target.value)} type="text" placeholder="Paste the url link of the article to analyze"/>
                    <Button onClick={analyze}>Analyse</Button>
                
                </InputContent>
                <Error>{error}</Error>
                
            </Content>
        </Wrapper>
    )
}

export default Home;