"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[1874],{4791:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"community/streams/2024-11-06","title":"Discord Development Stream","description":"Complete technical walkthrough of Eliza\'s architecture, systems, and implementation details","source":"@site/docs/community/streams/2024-11-06.md","sourceDirName":"community/streams","slug":"/community/streams/2024-11-06","permalink":"/eliza/docs/community/streams/2024-11-06","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/eliza/tree/main/docs/docs/community/streams/2024-11-06.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Discord Development Stream","description":"Complete technical walkthrough of Eliza\'s architecture, systems, and implementation details"},"sidebar":"tutorialSidebar","previous":{"title":"X: Memes, AI Agents, and DAOs","permalink":"/eliza/docs/community/streams/2024-11-08"},"next":{"title":"X: AI Agents & Crypto","permalink":"/eliza/docs/community/streams/2024-10-29"}}');var t=s(4848),l=s(8453);const o={sidebar_position:3,title:"Discord Development Stream",description:"Complete technical walkthrough of Eliza's architecture, systems, and implementation details"},r="Discord Dev Stream 11-6-24",a={},c=[{value:"Part 1",id:"part-1",level:2},{value:"Part 2",id:"part-2",level:2},{value:"Part 3",id:"part-3",level:2},{value:"Part 4",id:"part-4",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"discord-dev-stream-11-6-24",children:"Discord Dev Stream 11-6-24"})}),"\n",(0,t.jsx)(n.h2,{id:"part-1",children:"Part 1"}),"\n",(0,t.jsxs)(n.p,{children:["Watch: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=oqq5H0HRF_A",children:"https://www.youtube.com/watch?v=oqq5H0HRF_A"})]}),"\n",(0,t.jsx)(n.p,{children:"00:00:00 - Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Eliza is moving to a plugin architecture to enable developers to easily add integrations (e.g. Ethereum wallets, NFTs, Obsidian, etc.) without modifying core code"}),"\n",(0,t.jsx)(n.li,{children:"Plugins allow devs to focus on specific areas of interest"}),"\n",(0,t.jsx)(n.li,{children:"Core changes will focus on enabling more flexibility and features to support plugins"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:01:27 - Core abstractions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Characters: Way to input information to enable multi-agent systems"}),"\n",(0,t.jsx)(n.li,{children:"Actions, evaluators, providers"}),"\n",(0,t.jsx)(n.li,{children:"Existing capabilities: Document reading, audio transcription, video summarization, long-form context, timed message summarization"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:02:50 - Eliza as an agent, not just a chatbot"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Designed to act human-like and interact with the world using human tools"}),"\n",(0,t.jsx)(n.li,{children:"Aim is to enable natural interactions without reliance on slash commands"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:04:44 - Advanced usage and services"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Memory and vector search db (SQLite, Postgres with pgVector)"}),"\n",(0,t.jsx)(n.li,{children:"Browser service to summarize website content, get through CAPTCHAs"}),"\n",(0,t.jsx)(n.li,{children:"Services are tools leveraged by actions, attached to runtime"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:06:06 - Character-centric configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Moving secrets, API keys, model provider to character config"}),"\n",(0,t.jsx)(n.li,{children:"Clients will become plugins, selectable per character"}),"\n",(0,t.jsx)(n.li,{children:"Allows closed-source custom plugins while still contributing to open-source"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:10:13 - Providers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inject dynamic, real-time context into the agent"}),"\n",(0,t.jsx)(n.li,{children:"Examples: Time, wallet, marketplace trust score, token balances, boredom/cringe detection"}),"\n",(0,t.jsx)(n.li,{children:"Easy to add and register with the agent"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:15:12 - Setting up providers and default actions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Default providers imported in runtime.ts"}),"\n",(0,t.jsx)(n.li,{children:"CLI loads characters and default actions (to be made more flexible)"}),"\n",(0,t.jsx)(n.li,{children:"Character config will define custom action names to load"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:18:13 - Actions\nQ: How does each client decide which action to call?\nA: Agent response can include text, action, or both. Process actions checks the action name/similes and executes the corresponding handler. Action description is injected into agent context to guide usage."}),"\n",(0,t.jsx)(n.p,{children:"00:22:27 - Action execution flow"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check if action should be taken (validation)"}),"\n",(0,t.jsx)(n.li,{children:"Determine action outcome"}),"\n",(0,t.jsx)(n.li,{children:"Compose context and send follow-up if continuing"}),"\n",(0,t.jsx)(n.li,{children:"Execute desired functionality (mint token, generate image, etc.)"}),"\n",(0,t.jsx)(n.li,{children:"Use callback to send messages back to the connector (Discord, Twitter, etc.)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'00:24:47 - Choosing actions\nQ: How does it choose which action to run?\nA: The "generate method response" includes the action to run. Message handler template includes action examples, facts, generated dialogue actions, and more to guide the agent.'}),"\n",(0,t.jsx)(n.p,{children:'00:28:22 - Custom actions\nQ: How to create a custom action (e.g. send USDC to a wallet)?\nA: Use existing actions (like token swap) as a template. Actions don\'t have input fields, but use secondary prompts to gather parameters. The "generate object" converts language to API calls.'}),"\n",(0,t.jsx)(n.p,{children:"00:32:21 - Limitations of action-only approaches"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shaw believes half of the PhD papers on action-only models are not reproducible"}),"\n",(0,t.jsx)(n.li,{children:"Many public claims of superior models are exaggerated; use Eliza if it's better"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:36:40 - Next steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shaw to make a tutorial to better communicate key concepts"}),"\n",(0,t.jsx)(n.li,{children:"Debugging and improvements based on the discussion"}),"\n",(0,t.jsx)(n.li,{children:"Attendee to document their experience and suggest doc enhancements"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"part-2",children:"Part 2"}),"\n",(0,t.jsxs)(n.p,{children:["Watch: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=yE8Mzq3BnUc",children:"https://www.youtube.com/watch?v=yE8Mzq3BnUc"})]}),"\n",(0,t.jsx)(n.p,{children:"00:00:00 - Dealing with OpenAI rate limits for new accounts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New accounts have very low rate limits"}),"\n",(0,t.jsxs)(n.li,{children:["Options to increase limits:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Have a friend at OpenAI age your account"}),"\n",(0,t.jsx)(n.li,{children:"Use an older account"}),"\n",(0,t.jsx)(n.li,{children:"Consistently use the API and limits will increase quickly"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Can also email OpenAI to request limit increases"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:00:43 - Alternatives to OpenAI to avoid rate limits"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Amazon Bedrock or Google Vertex likely have same models without strict rate limits"}),"\n",(0,t.jsx)(n.li,{children:"Switching to these is probably a one-line change"}),"\n",(0,t.jsx)(n.li,{children:"Project 89 got unlimited free access to Vertex"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:01:25 - Memory management best practices\nQ: Suggestions for memory management best practices across users/rooms?\nA: Most memory systems are user-agent based, with no room concept. Eliza uses a room abstraction (like a Discord channel/server or Twitter thread) to enable multi-agent simulation. Memories are stored per-agent to avoid collisions."}),"\n",(0,t.jsx)(n.p,{children:"00:02:57 - Using memories in Eliza"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Memories are used in the ",(0,t.jsx)(n.code,{children:"composeState"})," function"]}),"\n",(0,t.jsx)(n.li,{children:"Pulls memories from various sources (recent messages, facts, goals, etc.) into a large state object"}),"\n",(0,t.jsx)(n.li,{children:"State object is used to hydrate templates"}),"\n",(0,t.jsx)(n.li,{children:"Custom memory providers can be added to pull from other sources (Obsidian, databases)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:05:11 - Evaluators vs. Action validation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Actions have a ",(0,t.jsx)(n.code,{children:"validate"})," function to check if the action is valid to run (e.g., check if agent has a wallet before a swap)"]}),"\n",(0,t.jsx)(n.li,{children:'Evaluators are a separate abstraction that run a "reflection" step'}),"\n",(0,t.jsx)(n.li,{children:"Example: Fact extraction evaluator runs every N messages to store facts about the user as memories"}),"\n",(0,t.jsx)(n.li,{children:'Allows agent to "get to know" the user without needing full conversation history'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:07:58 - Example use case: Order book evaluator"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Evaluator looks at chats sent to an agent and extracts information about "shields" (tokens?)'}),"\n",(0,t.jsx)(n.li,{children:'Uses this to build an order book and "marketplace of trust"'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:09:15 - Mapping Eliza abstractions to OODA loop"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Providers: Observe/Orient stages (merged since agent is a data machine)"}),"\n",(0,t.jsx)(n.li,{children:"Actions & response handling: Decide stage"}),"\n",(0,t.jsx)(n.li,{children:"Action execution: Act stage"}),"\n",(0,t.jsx)(n.li,{children:"Evaluators: Update state, then loop back to Decide"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:10:03 - Wrap up"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shaw considers making a video to explain these concepts in depth"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"part-3",children:"Part 3"}),"\n",(0,t.jsxs)(n.p,{children:["Watch: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=7FiKJPyaMJI",children:"https://www.youtube.com/watch?v=7FiKJPyaMJI"})]}),"\n",(0,t.jsx)(n.p,{children:"00:00:00 - Managing large context sizes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"State object can get very large, especially with long user posts"}),"\n",(0,t.jsxs)(n.li,{children:['Eliza uses "trim tokens" and a maximum content length (120k tokens) to cap context size',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New models have 128k-200k context, which is a lot (equivalent to 10 YouTube videos + full conversation)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Conversation length is typically capped at 32 messages","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fact extraction allows recalling information beyond this window"}),"\n",(0,t.jsx)(n.li,{children:"Per-channel conversation access"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Increasing conversation length risks more aggressive token trimming from the top of the prompt","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keep instructions at the bottom to avoid trimming them"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:01:53 - Billing costs for cloud/GPT models\nQ: What billing costs have you experienced with cloud/GPT model integration?\nA:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Open Router has a few always-free models limited to 8k context and rate-limited","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plan to re-implement and use these for the tiny/check model with fallback for rate limiting"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"8k context unlikely to make a good agent; preference for smaller model over largest 8k one"}),"\n",(0,t.jsx)(n.li,{children:"Locally-run models are free for MacBooks with 16GB RAM, but not feasible for Linux/AMD users"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:03:35 - Cost management strategies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Very cost-scalable depending on model size"}),"\n",(0,t.jsxs)(n.li,{children:["Use very cheap model (1000x cheaper than GPT-4) for should_respond handler","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Runs AI on every message, so cost is a consideration"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Consider running a local Llama 3B model for should_respond to minimize costs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only pay for valid generations"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:04:32 - Model provider and class configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ModelProvider"})," class with ",(0,t.jsx)(n.code,{children:"ModelClass"})," (small, medium, large, embedding)"]}),"\n",(0,t.jsxs)(n.li,{children:["Configured in ",(0,t.jsx)(n.code,{children:"models.ts"})]}),"\n",(0,t.jsx)(n.li,{children:"Example: OpenAI small = GPT-4-mini, medium = GPT-4"}),"\n",(0,t.jsxs)(n.li,{children:["Approach: Check if model class can handle everything in less than 8k context","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If yes (should_respond), default to free tier"}),"\n",(0,t.jsx)(n.li,{children:"Else, use big models"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:06:23 - Fine-tuned model support"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Extend ",(0,t.jsx)(n.code,{children:"ModelProvider"})," to support fine-tuned instances of small Llama models for specific tasks"]}),"\n",(0,t.jsx)(n.li,{children:"In progress, to be added soon"}),"\n",(0,t.jsxs)(n.li,{children:["Model endpoint override exists; will add per-model provider override","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allows pointing small model to fine-tuned Llama 3.1B for should_respond"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:07:10 - Avoiding cringey model loops"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fine-tuning is a form of anti-slop (avoiding low-quality responses)"}),"\n",(0,t.jsxs)(n.li,{children:['For detecting cringey model responses, use the "boredom provider"',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Has a list of cringe words; if detected, agent disengages"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["JSON file exists with words disproportionately high in the dataset","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To be shared for a more comprehensive solution"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"part-4",children:"Part 4"}),"\n",(0,t.jsxs)(n.p,{children:["Watch: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ZlzZzDU1drM",children:"https://www.youtube.com/watch?v=ZlzZzDU1drM"})]}),"\n",(0,t.jsx)(n.p,{children:'00:00:00 - Setting up an autonomous agent loop\nQ: How to set up an agent to constantly loop and explore based on objectives/goals?\nA: Create a new "autonomous" client:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Initialize with just the runtime (no Express app needed)"}),"\n",(0,t.jsxs)(n.li,{children:["Set a timer to call a ",(0,t.jsx)(n.code,{children:"step"})," function every 10 seconds"]}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"step"})," function:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Compose state"}),"\n",(0,t.jsx)(n.li,{children:"Decide on action"}),"\n",(0,t.jsx)(n.li,{children:"Execute action"}),"\n",(0,t.jsx)(n.li,{children:"Update state"}),"\n",(0,t.jsx)(n.li,{children:"Run evaluators"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:01:56 - Creating an auto template"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an ",(0,t.jsx)(n.code,{children:"autoTemplate"})," with agent info (bio, lore, goals, actions)"]}),"\n",(0,t.jsx)(n.li,{children:'Prompt: "What does the agent want to do? Your response should only be the name of the action to call."'}),"\n",(0,t.jsxs)(n.li,{children:["Compose state using ",(0,t.jsx)(n.code,{children:"runtime.composeState"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:03:38 - Passing a message object"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Need to pass a message object with ",(0,t.jsx)(n.code,{children:"userId"}),", ",(0,t.jsx)(n.code,{children:"agentId"}),", ",(0,t.jsx)(n.code,{children:"content"}),", and ",(0,t.jsx)(n.code,{children:"roomId"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a unique ",(0,t.jsx)(n.code,{children:"roomId"})," for the autonomous agent using ",(0,t.jsx)(n.code,{children:"crypto.randomUUID()"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"userId"})," and ",(0,t.jsx)(n.code,{children:"agentId"})," using the runtime"]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"content"})," to a default message"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:04:33 - Composing context"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Compose context using the runtime, state, and auto template"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"00:05:02 - Type error"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Getting a type error: "is missing the following from type state"'}),"\n",(0,t.jsx)(n.li,{children:"(Transcript ends before resolution)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The key steps are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a dedicated autonomous client"}),"\n",(0,t.jsx)(n.li,{children:"Set up a loop to continuously step through the runtime"}),"\n",(0,t.jsx)(n.li,{children:"In each step, compose state, decide & execute actions, update state, and run evaluators"}),"\n",(0,t.jsx)(n.li,{children:"Create a custom auto template to guide the agent's decisions"}),"\n",(0,t.jsx)(n.li,{children:"Pass a properly formatted message object"}),"\n",(0,t.jsx)(n.li,{children:"Compose context using the runtime, state, and auto template"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);