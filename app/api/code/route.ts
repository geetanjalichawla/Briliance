import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {ChatCompletionRequestMessage, Configuration , OpenAIApi} from 'openai'


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const instructionMessage : ChatCompletionRequestMessage ={
    role: 'system',
    content : 'You are a Code Generator. You must answer only in markdown code snippets. Use code comments for explanations.'
}
export async function POST(req:Request) {
    console.log(process.env.OPENAI_API_KEY)
    try {
        const {userId} = auth();
        const body = await req.json();
        const {message} = body;
        if(!userId)
        return new NextResponse("Unauthorized", {status: 401});

        if(!configuration.apiKey)
        return new NextResponse('Open API key is not configured' , {status :500});

        if(!message)
        return new NextResponse('message is required' , {status :400});

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [instructionMessage,...message],

        })

        return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[Code_Error]",error)
        return new NextResponse('something went wrong' , {status :500});

    }
}