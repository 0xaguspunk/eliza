"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[2536],{3286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"guides/configuration","title":"\u2699\ufe0f Configuration Guide","description":"This guide covers how to configure Eliza for different use cases and environments. We\'ll walk through all available configuration options and best practices.","source":"@site/docs/guides/configuration.md","sourceDirName":"guides","slug":"/guides/configuration","permalink":"/eliza/docs/guides/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/eliza/tree/main/docs/docs/guides/configuration.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Evaluators","permalink":"/eliza/docs/core/evaluators"},"next":{"title":"Advanced Usage","permalink":"/eliza/docs/guides/advanced"}}');var s=i(4848),a=i(8453);const o={sidebar_position:9},t="\u2699\ufe0f Configuration Guide",c={},l=[{value:"Environment Configuration",id:"environment-configuration",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Core Environment Variables",id:"core-environment-variables",level:3},{value:"Client-Specific Configuration",id:"client-specific-configuration",level:3},{value:"Discord Configuration",id:"discord-configuration",level:4},{value:"Twitter Configuration",id:"twitter-configuration",level:4},{value:"Telegram Configuration",id:"telegram-configuration",level:4},{value:"Model Provider Settings",id:"model-provider-settings",level:3},{value:"Character Configuration",id:"character-configuration",level:2},{value:"Character File Structure",id:"character-file-structure",level:3},{value:"Loading Characters",id:"loading-characters",level:3},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Adding Custom Actions",id:"adding-custom-actions",level:3},{value:"Action Configuration Structure",id:"action-configuration-structure",level:3},{value:"Provider Configuration",id:"provider-configuration",level:2},{value:"Database Providers",id:"database-providers",level:3},{value:"Model Providers",id:"model-providers",level:3},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Runtime Settings",id:"runtime-settings",level:3},{value:"Plugin Configuration",id:"plugin-configuration",level:3},{value:"Configuration Best Practices",id:"configuration-best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Configuration Validation",id:"configuration-validation",level:3},{value:"Further Resources",id:"further-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\ufe0f-configuration-guide",children:"\u2699\ufe0f Configuration Guide"})}),"\n",(0,s.jsx)(n.p,{children:"This guide covers how to configure Eliza for different use cases and environments. We'll walk through all available configuration options and best practices."}),"\n",(0,s.jsx)(n.h2,{id:"environment-configuration",children:"Environment Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,s.jsx)(n.p,{children:"The first step is creating your environment configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,s.jsx)(n.h3,{id:"core-environment-variables",children:"Core Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Here are the essential environment variables you need to configure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Core API Keys\nOPENAI_API_KEY=sk-your-key # Required for OpenAI features\nANTHROPIC_API_KEY=your-key  # Required for Claude models\nTOGETHER_API_KEY=your-key   # Required for Together.ai models\n\n# Default Settings\nXAI_MODEL=gpt-4o-mini      # Default model to use\nX_SERVER_URL=              # Optional model API endpoint\n"})}),"\n",(0,s.jsx)(n.h3,{id:"client-specific-configuration",children:"Client-Specific Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"discord-configuration",children:"Discord Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DISCORD_APPLICATION_ID=     # Your Discord app ID\nDISCORD_API_TOKEN=         # Discord bot token\n"})}),"\n",(0,s.jsx)(n.h4,{id:"twitter-configuration",children:"Twitter Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TWITTER_USERNAME=          # Bot Twitter username\nTWITTER_PASSWORD=          # Bot Twitter password \nTWITTER_EMAIL=            # Twitter account email\nTWITTER_COOKIES=          # Twitter auth cookies\nTWITTER_DRY_RUN=false    # Test mode without posting\n"})}),"\n",(0,s.jsx)(n.h4,{id:"telegram-configuration",children:"Telegram Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"TELEGRAM_BOT_TOKEN=       # Telegram bot token\n"})}),"\n",(0,s.jsx)(n.h3,{id:"model-provider-settings",children:"Model Provider Settings"}),"\n",(0,s.jsx)(n.p,{children:"You can configure different AI model providers:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# OpenAI Settings\nOPENAI_API_KEY=sk-*\n\n# Anthropic Settings\nANTHROPIC_API_KEY=\n\n# Together.ai Settings  \nTOGETHER_API_KEY=\n\n# Local Model Settings\nXAI_MODEL=meta-llama/Llama-3.1-7b-instruct\n"})}),"\n",(0,s.jsx)(n.h2,{id:"character-configuration",children:"Character Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"character-file-structure",children:"Character File Structure"}),"\n",(0,s.jsxs)(n.p,{children:["Character files define your agent's personality and behavior. Create them in the ",(0,s.jsx)(n.code,{children:"characters/"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "AgentName",\n  "clients": ["discord", "twitter"],\n  "modelProvider": "openai",\n  "settings": {\n    "secrets": {\n      "OPENAI_API_KEY": "character-specific-key",\n      "DISCORD_TOKEN": "bot-specific-token"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"loading-characters",children:"Loading Characters"}),"\n",(0,s.jsx)(n.p,{children:"You can load characters in several ways:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Load default character\npnpm start\n\n# Load specific character\npnpm start --characters="characters/your-character.json"\n\n# Load multiple characters\npnpm start --characters="characters/char1.json,characters/char2.json"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"custom-actions",children:"Custom Actions"}),"\n",(0,s.jsx)(n.h3,{id:"adding-custom-actions",children:"Adding Custom Actions"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"custom_actions"})," directory"]}),"\n",(0,s.jsx)(n.li,{children:"Add your action files there"}),"\n",(0,s.jsxs)(n.li,{children:["Configure in ",(0,s.jsx)(n.code,{children:"elizaConfig.yaml"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"actions:\n  - name: myCustomAction\n    path: ./custom_actions/myAction.ts\n"})}),"\n",(0,s.jsx)(n.h3,{id:"action-configuration-structure",children:"Action Configuration Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'export const myAction: Action = {\n  name: "MY_ACTION",\n  similes: ["SIMILAR_ACTION", "ALTERNATE_NAME"],\n  validate: async (runtime: IAgentRuntime, message: Memory) => {\n    // Validation logic\n    return true;\n  },\n  description: "Action description",\n  handler: async (runtime: IAgentRuntime, message: Memory) => {\n    // Action logic\n    return true;\n  }\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"provider-configuration",children:"Provider Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"database-providers",children:"Database Providers"}),"\n",(0,s.jsx)(n.p,{children:"Configure different database backends:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// SQLite (Recommended for development)\nimport { SqliteDatabaseAdapter } from "@your-org/agent-framework/adapters";\nconst db = new SqliteDatabaseAdapter("./dev.db");\n\n// PostgreSQL (Production)\nimport { PostgresDatabaseAdapter } from "@your-org/agent-framework/adapters";\nconst db = new PostgresDatabaseAdapter({\n  host: process.env.DB_HOST,\n  port: parseInt(process.env.DB_PORT),\n  database: process.env.DB_NAME,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"model-providers",children:"Model Providers"}),"\n",(0,s.jsx)(n.p,{children:"Configure model providers in your character file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "modelProvider": "openai",\n  "settings": {\n    "model": "gpt-4o-mini",\n    "temperature": 0.7,\n    "maxTokens": 2000\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"runtime-settings",children:"Runtime Settings"}),"\n",(0,s.jsx)(n.p,{children:"Fine-tune runtime behavior:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const settings = {\n  // Logging\n  DEBUG: "eliza:*",\n  LOG_LEVEL: "info",\n\n  // Performance\n  MAX_CONCURRENT_REQUESTS: 5,\n  REQUEST_TIMEOUT: 30000,\n  \n  // Memory\n  MEMORY_TTL: 3600,\n  MAX_MEMORY_ITEMS: 1000\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"plugin-configuration",children:"Plugin Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Enable and configure plugins in ",(0,s.jsx)(n.code,{children:"elizaConfig.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"plugins:\n  - name: solana\n    enabled: true\n    settings:\n      network: mainnet-beta\n      endpoint: https://api.mainnet-beta.solana.com\n\n  - name: image-generation\n    enabled: true\n    settings:\n      provider: dalle\n      size: 1024x1024\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-best-practices",children:"Configuration Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment Segregation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use different ",(0,s.jsx)(n.code,{children:".env"})," files for different environments"]}),"\n",(0,s.jsxs)(n.li,{children:["Follow naming convention: ",(0,s.jsx)(n.code,{children:".env.development"}),", ",(0,s.jsx)(n.code,{children:".env.staging"}),", ",(0,s.jsx)(n.code,{children:".env.production"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Secret Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Never commit secrets to version control"}),"\n",(0,s.jsx)(n.li,{children:"Use secret management services in production"}),"\n",(0,s.jsx)(n.li,{children:"Rotate API keys regularly"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Character Configuration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keep character files modular and focused"}),"\n",(0,s.jsx)(n.li,{children:"Use inheritance for shared traits"}),"\n",(0,s.jsx)(n.li,{children:"Document character behaviors"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Plugin Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enable only needed plugins"}),"\n",(0,s.jsx)(n.li,{children:"Configure plugin-specific settings in separate files"}),"\n",(0,s.jsx)(n.li,{children:"Monitor plugin performance"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Database Configuration"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use SQLite for development"}),"\n",(0,s.jsx)(n.li,{children:"Configure connection pooling for production"}),"\n",(0,s.jsx)(n.li,{children:"Set up proper indexes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Environment Variables Not Loading"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Check .env file location\nnode -e \"console.log(require('path').resolve('.env'))\"\n\n# Verify environment variables\nnode -e \"console.log(process.env)\"\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Character Loading Failures"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Validate character file\nnpx ajv validate -s character-schema.json -d your-character.json\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Database Connection Issues"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Test database connection\nnpx ts-node scripts/test-db-connection.ts\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-validation",children:"Configuration Validation"}),"\n",(0,s.jsx)(n.p,{children:"Use the built-in config validator:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run validate-config\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will check:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Character files"}),"\n",(0,s.jsx)(n.li,{children:"Database configuration"}),"\n",(0,s.jsx)(n.li,{children:"Plugin settings"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-resources",children:"Further Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/eliza/docs/quickstart",children:"Quickstart Guide"})," for initial setup"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/eliza/docs/guides/secrets-management",children:"Secrets Management"})," for secure configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/eliza/docs/guides/local-development",children:"Local Development"})," for development setup"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/eliza/docs/guides/advanced",children:"Advanced Usage"})," for complex configurations"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);