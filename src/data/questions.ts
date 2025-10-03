import { Question } from '../types/quiz.types';

export const questions: Question[] = [
  // QUARTER 1: EASY (Questions 1-37) - Foundation Concepts
  {
    id: 1,
    question: "What does MCP stand for?",
    options: [
      "Model Context Protocol",
      "Machine Communication Protocol", 
      "Multi-Client Platform",
      "Message Control Protocol"
    ],
    correctAnswer: 0,
    explanation: "MCP stands for Model Context Protocol, which is designed to help AI models connect to external data sources and tools.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which company developed the Model Context Protocol?",
    options: [
      "OpenAI",
      "Google",
      "Anthropic",
      "Microsoft"
    ],
    correctAnswer: 2,
    explanation: "Anthropic developed the Model Context Protocol as an open standard for AI integrations.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the primary purpose of MCP?",
    options: [
      "To replace HTTP protocols",
      "To enable AI models to connect to external data sources and tools",
      "To create new programming languages",
      "To manage database connections"
    ],
    correctAnswer: 1,
    explanation: "MCP's primary purpose is to enable seamless integration between LLM applications and external data sources and tools, solving the limitation of AI models being isolated from real-time, dynamic data.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which protocol does MCP use for communication?",
    options: [
      "HTTP/1.1",
      "WebSocket",
      "JSON-RPC 2.0",
      "gRPC"
    ],
    correctAnswer: 2,
    explanation: "MCP uses JSON-RPC 2.0 for communication, allowing dynamic, two-way interactions between clients and servers.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What are the three fundamental MCP primitives?",
    options: [
      "Clients, Servers, Hosts",
      "Tools, Resources, Prompts",
      "HTTP, WebSocket, STDIO",
      "Read, Write, Execute"
    ],
    correctAnswer: 1,
    explanation: "The three fundamental MCP primitives are Tools (model-controlled), Resources (app-controlled), and Prompts (user-controlled).",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Which MCP primitive is model-controlled?",
    options: [
      "Resources",
      "Tools",
      "Prompts",
      "Roots"
    ],
    correctAnswer: 1,
    explanation: "Tools are model-controlled primitives - the AI model decides when and how to use them to perform specific actions.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "What is the MCP architecture pattern?",
    options: [
      "Client → Server",
      "Host → Client → Server",
      "Server → Client → Host",
      "Host → Server → Client"
    ],
    correctAnswer: 1,
    explanation: "MCP uses a Host → Client → Server architecture where the Host (AI application) connects through a Client to MCP Servers that expose tools and data.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Which HTTP method is typically used for REST API resource creation?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: 1,
    explanation: "POST is typically used for creating new resources in REST APIs, as it's designed for non-idempotent operations that create new entities.",
    category: "REST APIs",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "What does HTTP status code 404 indicate?",
    options: [
      "Server Error",
      "Unauthorized",
      "Not Found",
      "Bad Request"
    ],
    correctAnswer: 2,
    explanation: "HTTP status code 404 indicates 'Not Found' - the requested resource could not be found on the server.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "In JSON-RPC 2.0, what field is required in every request?",
    options: [
      "id",
      "method",
      "params",
      "jsonrpc"
    ],
    correctAnswer: 3,
    explanation: "The 'jsonrpc' field is required in every JSON-RPC 2.0 request and must be exactly '2.0' to specify the protocol version.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Which OAuth 2.1 flow is recommended for public clients?",
    options: [
      "Client Credentials",
      "Resource Owner Password",
      "Authorization Code with PKCE",
      "Implicit Flow"
    ],
    correctAnswer: 2,
    explanation: "Authorization Code with PKCE (Proof Key for Code Exchange) is the recommended flow for public clients as it provides better security against code interception attacks.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 12,
    question: "What is PKCE in OAuth 2.1?",
    options: [
      "Public Key Certificate Exchange",
      "Proof Key for Code Exchange",
      "Private Key Cryptographic Extension",
      "Protocol Key Configuration Element"
    ],
    correctAnswer: 1,
    explanation: "PKCE stands for Proof Key for Code Exchange, a security extension that prevents authorization code interception attacks in OAuth flows.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Which transport protocol does MCP support for production deployments?",
    options: [
      "STDIO only",
      "HTTP only",
      "Both STDIO and HTTP",
      "WebSocket only"
    ],
    correctAnswer: 2,
    explanation: "MCP supports both STDIO (for local development) and HTTP (including StreamableHTTP for production deployments) transport protocols.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "What is the purpose of MCP Sampling capability?",
    options: [
      "To sample network traffic",
      "To delegate AI reasoning to clients",
      "To collect performance metrics",
      "To test server responses"
    ],
    correctAnswer: 1,
    explanation: "MCP Sampling capability allows servers to delegate reasoning tasks to clients, enabling AI-powered decision making within MCP tools.",
    category: "Capabilities & Transport",
    difficulty: "hard"
  },
  {
    id: 15,
    question: "When did OpenAI announce adoption of MCP?",
    options: [
      "November 2024",
      "January 2025",
      "March 2025",
      "June 2025"
    ],
    correctAnswer: 2,
    explanation: "OpenAI announced adoption of MCP on March 25, 2025, with the Agents SDK already shipping with MCP support.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Which MCP primitive provides read-only access to data?",
    options: [
      "Tools",
      "Resources",
      "Prompts",
      "Clients"
    ],
    correctAnswer: 1,
    explanation: "Resources are app-controlled primitives that provide read-only access to data like documents, databases, and APIs.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "What is the purpose of MCP Prompts?",
    options: [
      "To execute server actions",
      "To provide read-only data access",
      "To offer pre-crafted instructions for workflows",
      "To manage client connections"
    ],
    correctAnswer: 2,
    explanation: "Prompts are user-controlled primitives that provide pre-crafted instructions for common workflows, offering high-quality, reusable prompts.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "Which transport protocol is recommended for MCP development?",
    options: [
      "HTTP",
      "STDIO",
      "WebSocket",
      "gRPC"
    ],
    correctAnswer: 1,
    explanation: "STDIO (Standard Input/Output) transport is recommended for local development, while HTTP is used for production deployments.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "What does REST stand for?",
    options: [
      "Representational State Transfer",
      "Remote Execution State Transfer",
      "Resource State Transmission",
      "Reliable Execution State Transfer"
    ],
    correctAnswer: 0,
    explanation: "REST stands for Representational State Transfer, an architectural style for designing networked applications.",
    category: "REST APIs",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Which HTTP status code indicates successful resource creation?",
    options: [
      "200 OK",
      "201 Created",
      "202 Accepted",
      "204 No Content"
    ],
    correctAnswer: 1,
    explanation: "HTTP status code 201 Created indicates that a new resource has been successfully created on the server.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "What is the primary transport protocol used by MCP for communication?",
    options: [
      "HTTP/1.1",
      "WebSocket",
      "JSON-RPC 2.0",
      "gRPC"
    ],
    correctAnswer: 2,
    explanation: "MCP uses JSON-RPC 2.0 as its primary communication protocol, which can be transported over various mechanisms like STDIO or HTTP.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Which field is mandatory in every JSON-RPC 2.0 request?",
    options: [
      "id",
      "params",
      "jsonrpc",
      "method"
    ],
    correctAnswer: 2,
    explanation: "The 'jsonrpc' field is mandatory in every JSON-RPC 2.0 request and must be exactly '2.0' to specify the protocol version.",
    category: "JSON-RPC",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "What is a JSON-RPC notification?",
    options: [
      "A request with an error response",
      "A request without an id field",
      "A response without a result field",
      "A request with null params"
    ],
    correctAnswer: 1,
    explanation: "A JSON-RPC notification is a request object without an 'id' field, indicating the client doesn't expect a response from the server.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "What does HATEOAS stand for in REST architecture?",
    options: [
      "Hypertext Application Transfer Engine of Application State",
      "Hypermedia as the Engine of Application State",
      "HTTP Application Transfer Engine of Application State",
      "Hyperlink Application Transfer Engine of Application State"
    ],
    correctAnswer: 1,
    explanation: "HATEOAS stands for Hypermedia as the Engine of Application State, a REST constraint where clients discover actions through server-provided links.",
    category: "REST APIs",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "Which REST architectural constraint requires each request to contain all necessary information?",
    options: [
      "Client-Server Architecture",
      "Statelessness",
      "Cacheability",
      "Layered System"
    ],
    correctAnswer: 1,
    explanation: "Statelessness requires that each request from client to server must contain all information needed for the server to understand and process the request.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "Which MCP primitive is app-controlled?",
    options: [
      "Tools",
      "Resources",
      "Prompts",
      "Clients"
    ],
    correctAnswer: 1,
    explanation: "Resources are app-controlled primitives that provide read-only access to data like documents, databases, and APIs.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "What is MCP Sampling capability used for?",
    options: [
      "To sample network traffic",
      "To delegate AI reasoning to clients",
      "To collect performance metrics",
      "To test server responses"
    ],
    correctAnswer: 1,
    explanation: "MCP Sampling capability allows servers to delegate reasoning tasks to clients, enabling AI-powered decision making within MCP tools.",
    category: "Capabilities & Transport",
    difficulty: "hard"
  },
  {
    id: 28,
    question: "Which OAuth 2.1 flow is recommended for public clients?",
    options: [
      "Client Credentials",
      "Resource Owner Password",
      "Authorization Code with PKCE",
      "Implicit Flow"
    ],
    correctAnswer: 2,
    explanation: "Authorization Code with PKCE (Proof Key for Code Exchange) is the recommended flow for public clients as it provides better security against code interception attacks.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "What does PKCE stand for in OAuth 2.1?",
    options: [
      "Public Key Certificate Exchange",
      "Proof Key for Code Exchange",
      "Private Key Cryptographic Extension",
      "Protocol Key Configuration Element"
    ],
    correctAnswer: 1,
    explanation: "PKCE stands for Proof Key for Code Exchange, a security extension that prevents authorization code interception attacks in OAuth flows.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 30,
    question: "What is the purpose of MCP Roots capability?",
    options: [
      "To manage server permissions",
      "To discover user context and project information",
      "To handle authentication",
      "To cache server responses"
    ],
    correctAnswer: 1,
    explanation: "MCP Roots capability allows servers to discover and access user context, project information, and workspace details for context-aware behavior.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "Which JSON-RPC error code indicates 'Method not found'?",
    options: [
      "-32700",
      "-32600",
      "-32601",
      "-32602"
    ],
    correctAnswer: 2,
    explanation: "JSON-RPC error code -32601 indicates 'Method not found' - the method does not exist or is not available on the server.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "What is the difference between HTTP/1.1 and HTTP/2 in terms of multiplexing?",
    options: [
      "HTTP/1.1 supports multiplexing, HTTP/2 does not",
      "Both support the same multiplexing capabilities",
      "HTTP/2 supports true multiplexing, HTTP/1.1 has head-of-line blocking",
      "Neither supports multiplexing"
    ],
    correctAnswer: 2,
    explanation: "HTTP/2 supports true multiplexing without head-of-line blocking, while HTTP/1.1 pipelining can suffer from head-of-line blocking issues.",
    category: "HTTP Theory",
    difficulty: "hard"
  },
  {
    id: 38,
    question: "Which HTTP method is idempotent?",
    options: [
      "POST",
      "GET",
      "PATCH",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "GET is idempotent - making multiple identical GET requests has the same effect as making a single request. POST is generally not idempotent.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "What is the purpose of MCP Logging capability?",
    options: [
      "To authenticate users",
      "To provide real-time feedback during operations",
      "To cache server responses",
      "To manage client connections"
    ],
    correctAnswer: 1,
    explanation: "MCP Logging capability provides real-time feedback and observability during long-running operations, enabling progress tracking and debugging.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Which protocol does HTTP/3 use as its transport layer?",
    options: [
      "TCP",
      "UDP",
      "QUIC",
      "SCTP"
    ],
    correctAnswer: 2,
    explanation: "HTTP/3 uses QUIC (Quick UDP Internet Connections) as its transport protocol, which is built on top of UDP and provides better performance than TCP.",
    category: "HTTP Theory",
    difficulty: "hard"
  },
  {
    id: 41,
    question: "What is the main advantage of MCP over traditional API integrations?",
    options: [
      "Faster performance",
      "Standardized protocol for AI-tool integration",
      "Better security",
      "Lower cost"
    ],
    correctAnswer: 1,
    explanation: "MCP provides a standardized protocol specifically designed for AI-tool integration, reducing the need for custom integrations for each tool or data source.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Which MCP capability allows servers to request AI reasoning from clients?",
    options: [
      "Logging",
      "Roots",
      "Sampling",
      "Progress"
    ],
    correctAnswer: 2,
    explanation: "Sampling capability allows servers to delegate reasoning tasks to clients, enabling AI-powered decision making within MCP tools.",
    category: "Capabilities & Transport",
    difficulty: "hard"
  },
  {
    id: 43,
    question: "What is the purpose of the MCP Server Inspector?",
    options: [
      "To deploy servers to production",
      "To test and debug MCP servers",
      "To monitor server performance",
      "To manage server authentication"
    ],
    correctAnswer: 1,
    explanation: "The MCP Server Inspector is a web-based tool for testing and debugging MCP servers during development.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 44,
    question: "Which transport mechanism is recommended for production MCP deployments?",
    options: [
      "STDIO",
      "StreamableHTTP",
      "WebSocket",
      "TCP"
    ],
    correctAnswer: 1,
    explanation: "StreamableHTTP transport is recommended for production deployments as it supports multiple client connections and better scalability.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "What does the 'jsonrpc' field value must be in JSON-RPC 2.0?",
    options: [
      "\"2.0\"",
      "\"json-rpc\"",
      "\"2\"",
      "\"jsonrpc-2.0\""
    ],
    correctAnswer: 0,
    explanation: "The 'jsonrpc' field must be exactly '2.0' in JSON-RPC 2.0 requests and responses to specify the protocol version.",
    category: "JSON-RPC",
    difficulty: "easy"
  },
  {
    id: 46,
    question: "Which HTTP status code range indicates client errors?",
    options: [
      "2xx",
      "3xx",
      "4xx",
      "5xx"
    ],
    correctAnswer: 2,
    explanation: "4xx status codes indicate client errors - the request contains bad syntax or cannot be fulfilled due to client-side issues.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 47,
    question: "What is the main benefit of HTTP/2's binary framing?",
    options: [
      "Better compression",
      "Easier debugging",
      "More efficient parsing and multiplexing",
      "Smaller message size"
    ],
    correctAnswer: 2,
    explanation: "HTTP/2's binary framing enables more efficient parsing by computers and allows for true multiplexing without head-of-line blocking.",
    category: "HTTP Theory",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "Which REST principle states that responses should indicate if they can be cached?",
    options: [
      "Statelessness",
      "Cacheability",
      "Uniform Interface",
      "Layered System"
    ],
    correctAnswer: 1,
    explanation: "Cacheability principle requires that responses explicitly define themselves as cacheable or non-cacheable to improve performance.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "What is the purpose of OAuth 2.1 Resource Indicators (RFC 8707)?",
    options: [
      "To encrypt tokens",
      "To specify the intended audience for tokens",
      "To validate client credentials",
      "To manage token expiration"
    ],
    correctAnswer: 1,
    explanation: "Resource Indicators allow clients to specify the intended audience (resource server) for requested tokens, preventing token leakage and misuse.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 50,
    question: "Which MCP primitive would you use to expose read-only database content?",
    options: [
      "Tools",
      "Resources",
      "Prompts",
      "Clients"
    ],
    correctAnswer: 1,
    explanation: "Resources are the appropriate MCP primitive for exposing read-only data like database content, documents, or API responses.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "What is the main difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP",
      "UDP is connection-oriented, TCP is connectionless",
      "TCP is reliable and connection-oriented, UDP is fast and connectionless",
      "There is no difference"
    ],
    correctAnswer: 2,
    explanation: "TCP provides reliable, connection-oriented communication with error checking, while UDP is faster but connectionless without guaranteed delivery.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "Which MCP lifecycle phase involves capability negotiation?",
    options: [
      "Operation",
      "Initialization",
      "Shutdown",
      "Authentication"
    ],
    correctAnswer: 1,
    explanation: "The Initialization phase involves the client and server exchanging supported protocol versions and capabilities before entering the operation phase.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "What is the purpose of WebSockets in web communication?",
    options: [
      "To replace HTTP entirely",
      "To provide full-duplex communication over a single TCP connection",
      "To improve HTTP caching",
      "To encrypt web traffic"
    ],
    correctAnswer: 1,
    explanation: "WebSockets enable full-duplex communication between client and server over a single TCP connection, allowing real-time bidirectional data exchange.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "Which OpenAI Agents SDK feature allows filtering MCP tools?",
    options: [
      "Tool caching",
      "Static and dynamic tool filters",
      "Prompt serving",
      "Multiple server connections"
    ],
    correctAnswer: 1,
    explanation: "The OpenAI Agents SDK supports both static (allow/block lists) and dynamic (callable filters) tool filtering for controlling which MCP tools are available to agents.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "What is gRPC primarily used for?",
    options: [
      "Web browsing",
      "High-performance RPC communication",
      "File transfer",
      "Email protocols"
    ],
    correctAnswer: 1,
    explanation: "gRPC is a high-performance, open-source RPC framework that uses Protocol Buffers and HTTP/2, ideal for microservice communication.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 56,
    question: "Which JSON-RPC error code indicates 'Parse error'?",
    options: [
      "-32700",
      "-32600",
      "-32601",
      "-32602"
    ],
    correctAnswer: 0,
    explanation: "JSON-RPC error code -32700 indicates 'Parse error' - invalid JSON was received by the server.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "What is the main advantage of QUIC over TCP?",
    options: [
      "Better security",
      "Eliminates head-of-line blocking",
      "Smaller packet size",
      "Easier implementation"
    ],
    correctAnswer: 1,
    explanation: "QUIC eliminates head-of-line blocking by multiplexing streams independently, so packet loss in one stream doesn't affect others.",
    category: "Network Protocols",
    difficulty: "hard"
  },
  {
    id: 58,
    question: "Which HTTP header is used to specify the content type of a request body?",
    options: [
      "Accept",
      "Content-Type",
      "Content-Length",
      "Content-Encoding"
    ],
    correctAnswer: 1,
    explanation: "The Content-Type header specifies the media type of the request or response body, such as 'application/json' or 'text/html'.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 59,
    question: "What is the purpose of MCP Progress notifications?",
    options: [
      "To authenticate users",
      "To report progress of long-running operations",
      "To cache responses",
      "To manage connections"
    ],
    correctAnswer: 1,
    explanation: "MCP Progress notifications provide a way for servers to report the progress of long-running operations to clients, enabling progress bars and user feedback.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "Which REST HTTP method is used for partial updates?",
    options: [
      "PUT",
      "POST",
      "PATCH",
      "UPDATE"
    ],
    correctAnswer: 2,
    explanation: "PATCH is used for partial updates to existing resources, while PUT typically replaces the entire resource.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 61,
    question: "What is the purpose of MCP Cancellation utility?",
    options: [
      "To cancel server connections",
      "To cancel requests that are in progress",
      "To cancel authentication",
      "To cancel resource access"
    ],
    correctAnswer: 1,
    explanation: "MCP Cancellation allows either client or server to cancel a request that is already in progress, useful for stopping long-running tasks that are no longer needed.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Which protocol is MCP inspired by?",
    options: [
      "HTTP",
      "Language Server Protocol (LSP)",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1,
    explanation: "MCP is inspired by the Language Server Protocol (LSP), which standardized how development tools communicate with language servers.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "What does Server-Sent Events (SSE) provide?",
    options: [
      "Bidirectional communication",
      "Server-to-client streaming",
      "File upload capability",
      "Authentication mechanism"
    ],
    correctAnswer: 1,
    explanation: "Server-Sent Events (SSE) provides a way for servers to push data to clients in real-time over HTTP, enabling server-to-client streaming.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Which MCP specification version is the current standard?",
    options: [
      "2024-11-05",
      "2025-01-15",
      "2025-06-18",
      "2025-12-01"
    ],
    correctAnswer: 2,
    explanation: "The current MCP specification version is 2025-06-18, which includes the latest features and capabilities.",
    category: "MCP Specifications",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "What is the main purpose of OAuth 2.1 Dynamic Client Registration?",
    options: [
      "To encrypt client credentials",
      "To allow clients to register programmatically with authorization servers",
      "To validate access tokens",
      "To manage user sessions"
    ],
    correctAnswer: 1,
    explanation: "Dynamic Client Registration allows clients to programmatically register themselves with authorization servers without manual configuration.",
    category: "OAuth Security",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Which HTTP version introduced multiplexing without head-of-line blocking?",
    options: [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3"
    ],
    correctAnswer: 2,
    explanation: "HTTP/2 introduced true multiplexing without head-of-line blocking at the HTTP level, though TCP-level blocking could still occur.",
    category: "HTTP Theory",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "What is the purpose of MCP Ping utility?",
    options: [
      "To measure network latency",
      "To check if the connection is still active",
      "To authenticate connections",
      "To compress data"
    ],
    correctAnswer: 1,
    explanation: "MCP Ping utility provides a simple way to check if the connection between client and server is still active and responsive.",
    category: "Capabilities & Transport",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "Which JSON-RPC parameter structure uses key-value pairs?",
    options: [
      "By-position",
      "By-name",
      "By-index",
      "By-reference"
    ],
    correctAnswer: 1,
    explanation: "By-name parameter structure uses an Object with key-value pairs where each key represents a named parameter.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "What is the main benefit of using MCP with OpenAI Agents SDK?",
    options: [
      "Faster model inference",
      "Decoupled agent logic from tool implementation",
      "Better model accuracy",
      "Reduced API costs"
    ],
    correctAnswer: 1,
    explanation: "MCP with OpenAI Agents SDK enables decoupling of agent logic from tool implementation, allowing for modular, interoperable, and maintainable agentic systems.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Which transport layer protocol does QUIC use?",
    options: [
      "TCP",
      "UDP",
      "SCTP",
      "DCCP"
    ],
    correctAnswer: 1,
    explanation: "QUIC is built on top of UDP (User Datagram Protocol) and adds reliability, congestion control, and multiplexing features.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "What is the main advantage of HTTP/2's header compression (HPACK)?",
    options: [
      "Better security",
      "Reduced bandwidth usage",
      "Faster parsing",
      "Better caching"
    ],
    correctAnswer: 1,
    explanation: "HPACK compression in HTTP/2 reduces the size of HTTP headers, saving bandwidth especially for frequent API calls with similar headers.",
    category: "HTTP Theory",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "Which MCP primitive is user-controlled?",
    options: [
      "Tools",
      "Resources",
      "Prompts",
      "Servers"
    ],
    correctAnswer: 2,
    explanation: "Prompts are user-controlled primitives where users decide when to apply pre-crafted instructions for common workflows.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "What is the purpose of JWT (JSON Web Token) in OAuth?",
    options: [
      "To encrypt passwords",
      "To store user preferences",
      "To represent access tokens with embedded claims",
      "To compress data"
    ],
    correctAnswer: 2,
    explanation: "JWT is used to represent access tokens with embedded claims (user info, permissions, expiration) that can be validated without server lookup.",
    category: "OAuth Security",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Which REST constraint allows for intermediary components like proxies?",
    options: [
      "Statelessness",
      "Cacheability",
      "Layered System",
      "Uniform Interface"
    ],
    correctAnswer: 2,
    explanation: "The Layered System constraint allows for intermediary components like load balancers, proxies, and API gateways between client and server.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "What does WebRTC primarily enable?",
    options: [
      "Web page rendering",
      "Real-time peer-to-peer communication",
      "Database access",
      "File compression"
    ],
    correctAnswer: 1,
    explanation: "WebRTC (Web Real-Time Communication) enables real-time peer-to-peer communication for audio, video, and data directly between browsers.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 76,
    question: "Which JSON-RPC error code range is reserved for server errors?",
    options: [
      "-32000 to -32099",
      "-32600 to -32699",
      "-32700 to -32799",
      "-33000 to -33099"
    ],
    correctAnswer: 0,
    explanation: "JSON-RPC error codes -32000 to -32099 are reserved for implementation-defined server errors.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 77,
    question: "What is the main purpose of MCP Elicitation capability?",
    options: [
      "To authenticate users",
      "To dynamically request additional information from users",
      "To cache responses",
      "To compress data"
    ],
    correctAnswer: 1,
    explanation: "MCP Elicitation allows servers to dynamically request additional information from users through the client when more context is needed to complete a task.",
    category: "Capabilities & Transport",
    difficulty: "hard"
  },
  {
    id: 78,
    question: "Which HTTP status code indicates 'Unauthorized'?",
    options: [
      "400",
      "401",
      "403",
      "404"
    ],
    correctAnswer: 1,
    explanation: "HTTP status code 401 indicates 'Unauthorized' - authentication is required and has failed or has not been provided.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "What is the difference between stateful and stateless HTTP connections in MCP?",
    options: [
      "Stateful connections are faster",
      "Stateless connections support bidirectional communication",
      "Stateful connections maintain session state, stateless don't",
      "There is no difference"
    ],
    correctAnswer: 2,
    explanation: "Stateful HTTP connections maintain session state and support bidirectional communication, while stateless connections don't maintain state between requests.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Which OpenAI Agents SDK feature allows connecting to multiple MCP servers?",
    options: [
      "Tool filtering",
      "Prompt serving",
      "Multiple server connections",
      "Tool caching"
    ],
    correctAnswer: 2,
    explanation: "The OpenAI Agents SDK supports connecting a single agent to multiple MCP servers simultaneously, aggregating tools from various sources.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "What is the main benefit of using decorators in MCP Python SDK?",
    options: [
      "Better performance",
      "Simplified tool definition with type hints",
      "Enhanced security",
      "Reduced memory usage"
    ],
    correctAnswer: 1,
    explanation: "Decorators in MCP Python SDK simplify tool definition by using Python decorators with type hints instead of writing JSON schemas manually.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "Which protocol does gRPC typically use for transport?",
    options: [
      "HTTP/1.1",
      "HTTP/2",
      "WebSocket",
      "TCP"
    ],
    correctAnswer: 1,
    explanation: "gRPC typically uses HTTP/2 as its transport protocol, taking advantage of HTTP/2's multiplexing and streaming capabilities.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "What is the purpose of MIME types in HTTP?",
    options: [
      "To encrypt content",
      "To specify the format of content being transferred",
      "To compress data",
      "To authenticate requests"
    ],
    correctAnswer: 1,
    explanation: "MIME types specify the format and nature of content being transferred, such as 'application/json', 'text/html', or 'image/png'.",
    category: "HTTP Theory",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "Which MCP architecture component manages multiple client instances?",
    options: [
      "Server",
      "Client",
      "Host",
      "Transport"
    ],
    correctAnswer: 2,
    explanation: "The Host is responsible for managing multiple client instances, controlling their permissions, lifecycle, and coordinating the overall AI integration.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "What is the main advantage of OAuth 2.1 Client Credentials flow?",
    options: [
      "Better user experience",
      "System-to-system authentication without user interaction",
      "Faster token validation",
      "Better security for web apps"
    ],
    correctAnswer: 1,
    explanation: "Client Credentials flow enables system-to-system authentication without user interaction, ideal for machine-to-machine communication.",
    category: "OAuth Security",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Which REST HTTP method is typically idempotent?",
    options: [
      "POST",
      "PUT",
      "PATCH",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "PUT is typically idempotent - making multiple identical PUT requests should have the same effect as making a single request.",
    category: "REST APIs",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "What is the main purpose of MCP's JSON-RPC foundation?",
    options: [
      "Better performance than HTTP",
      "Procedural/command-like interactions suitable for AI agents",
      "Enhanced security",
      "Smaller message size"
    ],
    correctAnswer: 1,
    explanation: "JSON-RPC provides procedural/command-like interactions that are more suitable for AI agent operations than REST's resource-oriented approach.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Which HTTP/3 feature helps with connection migration?",
    options: [
      "Binary framing",
      "Header compression",
      "Connection ID in QUIC",
      "Multiplexing"
    ],
    correctAnswer: 2,
    explanation: "QUIC's connection ID feature allows HTTP/3 connections to survive changes in the client's IP address, such as switching from Wi-Fi to cellular.",
    category: "HTTP Theory",
    difficulty: "hard"
  },
  {
    id: 89,
    question: "What is the main benefit of MCP's transport-agnostic design?",
    options: [
      "Better performance",
      "Flexibility to use different communication protocols",
      "Enhanced security",
      "Reduced complexity"
    ],
    correctAnswer: 1,
    explanation: "MCP's transport-agnostic design allows it to work over different protocols (STDIO, HTTP, WebSockets) depending on deployment needs.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Which company originally developed MCP?",
    options: [
      "OpenAI",
      "Google",
      "Anthropic",
      "Microsoft"
    ],
    correctAnswer: 2,
    explanation: "Anthropic developed the Model Context Protocol as an open standard for AI integrations, announced in November 2024.",
    category: "MCP Fundamentals",
    difficulty: "easy"
  },
  {
    id: 91,
    question: "What is the purpose of OAuth 2.1 Protected Resource Metadata?",
    options: [
      "To encrypt resource data",
      "To advertise the authorization server location",
      "To validate access tokens",
      "To manage user sessions"
    ],
    correctAnswer: 1,
    explanation: "Protected Resource Metadata (/.well-known/oauth-protected-resource) tells clients where to find the Authorization Server for a protected MCP server.",
    category: "OAuth Security",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Which JSON-RPC component is optional in requests?",
    options: [
      "jsonrpc",
      "method",
      "params",
      "id"
    ],
    correctAnswer: 2,
    explanation: "The 'params' field is optional in JSON-RPC requests and can be omitted if the method doesn't require any parameters.",
    category: "JSON-RPC",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "What is the main advantage of HTTP/2 Server Push?",
    options: [
      "Better security",
      "Proactively sending resources the client might need",
      "Reduced latency",
      "Better compression"
    ],
    correctAnswer: 1,
    explanation: "HTTP/2 Server Push allows servers to proactively send resources (like CSS, JS files) that the client might need, reducing round trips.",
    category: "HTTP Theory",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Which MCP capability is used for context discovery?",
    options: [
      "Sampling",
      "Logging",
      "Roots",
      "Progress"
    ],
    correctAnswer: 2,
    explanation: "MCP Roots capability is used for context discovery, allowing servers to discover and access user context, project information, and workspace details.",
    category: "Capabilities & Transport",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "What is the main difference between WebSockets and Server-Sent Events?",
    options: [
      "WebSockets are faster",
      "SSE is bidirectional, WebSockets are unidirectional",
      "WebSockets are bidirectional, SSE is server-to-client only",
      "There is no difference"
    ],
    correctAnswer: 2,
    explanation: "WebSockets provide full bidirectional communication, while Server-Sent Events (SSE) only support server-to-client streaming.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "Which REST constraint is optional?",
    options: [
      "Statelessness",
      "Cacheability",
      "Code on Demand",
      "Uniform Interface"
    ],
    correctAnswer: 2,
    explanation: "Code on Demand is the only optional constraint in REST, allowing servers to extend client functionality by transferring executable code.",
    category: "REST APIs",
    difficulty: "hard"
  },
  {
    id: 97,
    question: "What is the main purpose of MCP tool annotations?",
    options: [
      "To improve performance",
      "To provide metadata about tool capabilities and usage",
      "To encrypt tool data",
      "To compress tool responses"
    ],
    correctAnswer: 1,
    explanation: "MCP tool annotations provide metadata about tool capabilities, parameters, and usage patterns to help AI models understand how to use tools effectively.",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Which HTTP version completely eliminates head-of-line blocking?",
    options: [
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3",
      "None of them"
    ],
    correctAnswer: 2,
    explanation: "HTTP/3 completely eliminates head-of-line blocking by using QUIC, which multiplexes streams independently at the transport layer.",
    category: "HTTP Theory",
    difficulty: "hard"
  },
  {
    id: 99,
    question: "What is the main benefit of MCP's modular architecture?",
    options: [
      "Better performance",
      "Independent development and scaling of components",
      "Enhanced security",
      "Reduced costs"
    ],
    correctAnswer: 1,
    explanation: "MCP's modular architecture allows independent development, testing, and scaling of different components (agents, tools, data sources).",
    category: "MCP Fundamentals",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Which protocol feature makes QUIC particularly suitable for mobile networks?",
    options: [
      "Better compression",
      "Connection migration",
      "Faster handshake",
      "Lower bandwidth usage"
    ],
    correctAnswer: 1,
    explanation: "QUIC's connection migration feature allows connections to survive network changes (Wi-Fi to cellular), making it ideal for mobile networks.",
    category: "Network Protocols",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "What is the correct way to initialize a FastMCP server for stateless HTTP?",
    options: [
      "FastMCP(name='server', stateless_http=True)",
      "FastMCP(stateless=True, http=True)",
      "FastMCP.create_stateless('server')",
      "FastMCP(name='server', http_stateless=True)"
    ],
    correctAnswer: 0,
    explanation: "FastMCP is initialized with name and stateless_http=True for stateless HTTP transport, which doesn't require handshake or initialization.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "Which decorator is used to define an MCP tool in FastMCP?",
    options: [
      "@mcp.function()",
      "@mcp.tool()",
      "@mcp.method()",
      "@mcp.handler()"
    ],
    correctAnswer: 1,
    explanation: "The @mcp.tool() decorator is used to define MCP tools in FastMCP, with automatic type inference from function signatures.",
    category: "MCP Implementation",
    difficulty: "easy"
  },
  {
    id: 103,
    question: "How do you define an MCP resource with a dynamic URI pattern?",
    options: [
      "@mcp.resource('docs/{doc_id}')",
      "@mcp.resource('docs://{doc_id}')",
      "@mcp.resource('docs://{{doc_id}}')",
      "@mcp.resource('docs/:doc_id')"
    ],
    correctAnswer: 1,
    explanation: "MCP resources use URI patterns like 'docs://{doc_id}' where {doc_id} is a dynamic parameter that gets passed to the function.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "What is the purpose of the Context parameter in MCP tools?",
    options: [
      "To store tool configuration",
      "To enable client communication and progress reporting",
      "To handle authentication",
      "To manage server state"
    ],
    correctAnswer: 1,
    explanation: "The Context parameter enables tools to communicate with clients, report progress, send logs, and make sampling requests.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Which method is used to report progress in long-running MCP tools?",
    options: [
      "ctx.progress()",
      "ctx.update_progress()",
      "ctx.report_progress()",
      "ctx.send_progress()"
    ],
    correctAnswer: 2,
    explanation: "ctx.report_progress(progress, total, message) is used to report progress in long-running operations, enabling real-time feedback to clients.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "How do you enable tool list caching in OpenAI Agents SDK MCP integration?",
    options: [
      "MCPServerStreamableHttp(cache=True)",
      "MCPServerStreamableHttp(cache_tools_list=True)",
      "MCPServerStreamableHttp(enable_cache=True)",
      "MCPServerStreamableHttp(tool_cache=True)"
    ],
    correctAnswer: 1,
    explanation: "The cache_tools_list=True parameter in MCPServerStreamableHttp enables caching of tool lists for performance optimization.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "What is the correct way to create a sampling request in an MCP tool?",
    options: [
      "ctx.sample(messages)",
      "ctx.session.create_message(messages)",
      "ctx.request_sampling(messages)",
      "ctx.delegate_to_client(messages)"
    ],
    correctAnswer: 1,
    explanation: "ctx.session.create_message() is used to create sampling requests, delegating AI reasoning tasks to the client's LLM.",
    category: "MCP Implementation",
    difficulty: "hard"
  },
  {
    id: 108,
    question: "Which MIME type should be specified for JSON resources in MCP?",
    options: [
      "text/json",
      "application/json",
      "data/json",
      "content/json"
    ],
    correctAnswer: 1,
    explanation: "application/json is the standard MIME type for JSON content in MCP resources, specified in the @mcp.resource decorator.",
    category: "MCP Implementation",
    difficulty: "easy"
  },
  {
    id: 109,
    question: "What is required for MCP servers that need bidirectional communication?",
    options: [
      "stateless_http=True",
      "stateless_http=False",
      "bidirectional=True",
      "streaming=True"
    ],
    correctAnswer: 1,
    explanation: "Stateful servers (stateless_http=False) are required for bidirectional communication like sampling, progress reporting, and server-to-client requests.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "How do you handle errors properly in MCP tools?",
    options: [
      "Return error strings",
      "Use try-catch and raise ValueError with descriptive messages",
      "Return None for errors",
      "Use assert statements"
    ],
    correctAnswer: 1,
    explanation: "MCP tools should use proper exception handling with try-catch blocks and raise descriptive ValueError exceptions for client error handling.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "What is the purpose of Pydantic Field() in MCP tool parameters?",
    options: [
      "Type validation only",
      "Parameter description and validation",
      "Default value setting",
      "Parameter encryption"
    ],
    correctAnswer: 1,
    explanation: "Pydantic Field() provides parameter descriptions and validation for MCP tools, improving auto-generated documentation and type safety.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "Which method creates the ASGI application for FastMCP servers?",
    options: [
      "mcp.create_app()",
      "mcp.get_app()",
      "mcp.streamable_http_app()",
      "mcp.asgi_app()"
    ],
    correctAnswer: 2,
    explanation: "mcp.streamable_http_app() creates the ASGI application that can be deployed with servers like Uvicorn or Gunicorn.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "How do you implement OAuth token verification in MCP servers?",
    options: [
      "Inherit from TokenValidator class",
      "Inherit from TokenVerifier class",
      "Implement verify_token() method",
      "Use @token_required decorator"
    ],
    correctAnswer: 1,
    explanation: "MCP OAuth implementation requires inheriting from TokenVerifier class and implementing the verify_token() method for custom token validation.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "What is the correct way to send log messages from MCP tools?",
    options: [
      "print() statements",
      "logging.info()",
      "ctx.info(), ctx.debug(), ctx.warning(), ctx.error()",
      "mcp.log()"
    ],
    correctAnswer: 2,
    explanation: "MCP tools should use context methods like ctx.info(), ctx.debug(), ctx.warning(), and ctx.error() for proper log message routing to clients.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 115,
    question: "Which parameter is required when creating SamplingMessage objects?",
    options: [
      "content and role",
      "text and type",
      "message and sender",
      "data and format"
    ],
    correctAnswer: 0,
    explanation: "SamplingMessage objects require 'role' (like 'user') and 'content' (TextContent object) parameters for proper message structure.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "How do you configure AuthSettings for MCP OAuth integration?",
    options: [
      "AuthSettings(server_url, client_id)",
      "AuthSettings(issuer_url, required_scopes, resource_server_url)",
      "AuthSettings(auth_url, token_url)",
      "AuthSettings(oauth_config)"
    ],
    correctAnswer: 1,
    explanation: "AuthSettings requires issuer_url (authorization server), required_scopes (list), and resource_server_url for RFC 9728 compliance.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 117,
    question: "What is the correct way to handle WebSocket connections in Python?",
    options: [
      "websockets.connect() for clients",
      "websockets.serve() for servers",
      "Both websockets.connect() and websockets.serve()",
      "websockets.create_connection()"
    ],
    correctAnswer: 2,
    explanation: "Python websockets library uses websockets.connect() for client connections and websockets.serve() for server implementations.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "Which library is commonly used for QUIC implementation in Python?",
    options: [
      "pyquic",
      "aioquic",
      "quiclib",
      "python-quic"
    ],
    correctAnswer: 1,
    explanation: "aioquic is the primary Python library for QUIC protocol implementation, providing both client and server functionality.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "How do you implement Server-Sent Events (SSE) with FastAPI?",
    options: [
      "return StreamingResponse(generator, media_type='text/event-stream')",
      "return SSEResponse(data)",
      "return EventStream(generator)",
      "return Response(stream=True)"
    ],
    correctAnswer: 0,
    explanation: "FastAPI SSE implementation uses StreamingResponse with a generator function and media_type='text/event-stream' for proper SSE formatting.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 120,
    question: "What is required for QUIC server certificate configuration?",
    options: [
      "Only public key",
      "Certificate and private key files",
      "Only certificate file",
      "Certificate authority validation"
    ],
    correctAnswer: 1,
    explanation: "QUIC servers require both certificate (.pem) and private key files for TLS encryption, loaded using config.load_cert_chain().",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 121,
    question: "Which method is used to connect multiple MCP servers to one OpenAI agent?",
    options: [
      "Agent(mcp_servers=[server1, server2])",
      "Agent.add_servers([server1, server2])",
      "Agent.connect_multiple(servers)",
      "Agent(servers=multiple_servers)"
    ],
    correctAnswer: 0,
    explanation: "OpenAI Agents SDK accepts a list of MCP servers in the mcp_servers parameter, enabling multi-server orchestration in a single agent.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "What is the purpose of the 'name' parameter in MCPServerStreamableHttp?",
    options: [
      "Server authentication",
      "Identifying the server in logs and multi-server setups",
      "Setting the server hostname",
      "Defining the service name"
    ],
    correctAnswer: 1,
    explanation: "The 'name' parameter in MCPServerStreamableHttp is used for identifying the server in logs and distinguishing between multiple MCP servers.",
    category: "OpenAI Integration",
    difficulty: "easy"
  },
  {
    id: 123,
    question: "How do you implement dynamic tool filters in OpenAI Agents SDK?",
    options: [
      "Use static allow/block lists",
      "Implement callable filter functions",
      "Configure filter rules in settings",
      "Use regex patterns"
    ],
    correctAnswer: 1,
    explanation: "Dynamic tool filters in OpenAI Agents SDK are implemented using callable filter functions that can make runtime decisions based on context.",
    category: "OpenAI Integration",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "What is the correct way to handle async operations in MCP tools?",
    options: [
      "Use async def and await keywords",
      "Use threading",
      "Use multiprocessing",
      "Use synchronous code only"
    ],
    correctAnswer: 0,
    explanation: "MCP tools should use async def function definitions and await keywords for proper asynchronous operation handling in the FastMCP framework.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "Which parameter controls the maximum tokens in MCP sampling requests?",
    options: [
      "token_limit",
      "max_tokens",
      "token_max",
      "limit_tokens"
    ],
    correctAnswer: 1,
    explanation: "The max_tokens parameter in ctx.session.create_message() controls the maximum number of tokens the client's LLM can generate in sampling responses.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "What is the correct way to define an MCP prompt with parameters?",
    options: [
      "@mcp.prompt(name='format', description='...')",
      "@mcp.template(name='format')",
      "@mcp.prompt_template('format')",
      "@mcp.define_prompt('format')"
    ],
    correctAnswer: 0,
    explanation: "MCP prompts are defined using @mcp.prompt() decorator with name and description parameters, returning a list of Message objects.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "Which class is used for text content in MCP sampling messages?",
    options: [
      "TextMessage",
      "TextContent",
      "MessageText",
      "ContentText"
    ],
    correctAnswer: 1,
    explanation: "TextContent class is used to create text content in MCP sampling messages, with type='text' and text parameters.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "How do you implement gRPC service methods in Python?",
    options: [
      "Inherit from ServiceBase",
      "Inherit from generated Servicer class",
      "Use @grpc.method decorator",
      "Implement Service interface"
    ],
    correctAnswer: 1,
    explanation: "gRPC service methods are implemented by inheriting from the generated Servicer class (e.g., GreeterServicer) and overriding service methods.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "What is the purpose of Protocol Buffers in gRPC?",
    options: [
      "Authentication",
      "Message serialization and service definition",
      "Connection management",
      "Error handling"
    ],
    correctAnswer: 1,
    explanation: "Protocol Buffers define message formats and service interfaces in gRPC, providing efficient serialization and strong typing.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 130,
    question: "Which method is used to add gRPC servicers to a server?",
    options: [
      "server.add_service()",
      "server.register_servicer()",
      "add_GreeterServicer_to_server()",
      "server.bind_servicer()"
    ],
    correctAnswer: 2,
    explanation: "gRPC uses generated functions like add_GreeterServicer_to_server() to register service implementations with the server.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 131,
    question: "How do you handle connection cleanup in WebSocket servers?",
    options: [
      "Use try-finally blocks",
      "Use context managers",
      "Use try-except-finally with connection removal",
      "Automatic cleanup only"
    ],
    correctAnswer: 2,
    explanation: "WebSocket servers should use try-except-finally blocks to handle different disconnection scenarios and ensure proper connection cleanup.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 132,
    question: "What is the correct way to broadcast messages to multiple WebSocket clients?",
    options: [
      "Use websockets.broadcast()",
      "Iterate through connections set and send to each",
      "Use multicast sockets",
      "Use publish-subscribe pattern"
    ],
    correctAnswer: 1,
    explanation: "WebSocket broadcasting is implemented by maintaining a connections set and iterating through it to send messages to each connected client.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 133,
    question: "Which configuration is required for QUIC client connections?",
    options: [
      "QuicConfiguration(is_client=True)",
      "QuicConfiguration(client_mode=True)",
      "QuicConfiguration(type='client')",
      "QuicConfiguration(role='client')"
    ],
    correctAnswer: 0,
    explanation: "QUIC clients require QuicConfiguration with is_client=True parameter to establish proper client-side connections.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 134,
    question: "How do you handle SSE event formatting in Python?",
    options: [
      "Use json.dumps() only",
      "Format as 'event: type\\ndata: json\\n\\n'",
      "Use SSE library formatting",
      "Send raw JSON data"
    ],
    correctAnswer: 1,
    explanation: "SSE events must be formatted as 'event: type\\ndata: json_data\\n\\n' with proper newline delimiters for browser compatibility.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 135,
    question: "What is the purpose of keep-alive messages in SSE?",
    options: [
      "Data compression",
      "Connection authentication",
      "Preventing connection timeouts",
      "Error handling"
    ],
    correctAnswer: 2,
    explanation: "Keep-alive messages (like ':keep-alive\\n\\n') prevent proxy servers and browsers from timing out long-lived SSE connections.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 136,
    question: "Which parameter enables debug mode in FastMCP servers?",
    options: [
      "debug=True",
      "log_level='DEBUG'",
      "verbose=True",
      "development=True"
    ],
    correctAnswer: 0,
    explanation: "FastMCP servers use debug=True parameter to enable debug mode with detailed logging and error information.",
    category: "MCP Implementation",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "How do you specify the host and port for FastMCP servers?",
    options: [
      "FastMCP(address='localhost:8000')",
      "FastMCP(host='localhost', port=8000)",
      "FastMCP(bind='localhost:8000')",
      "FastMCP(listen='localhost:8000')"
    ],
    correctAnswer: 1,
    explanation: "FastMCP servers use separate host and port parameters to specify the binding address and port number.",
    category: "MCP Implementation",
    difficulty: "easy"
  },
  {
    id: 138,
    question: "What is the correct way to handle document editing in MCP tools?",
    options: [
      "Direct file system access",
      "Use string replace() method with validation",
      "Database transactions",
      "Version control systems"
    ],
    correctAnswer: 1,
    explanation: "MCP document editing tools typically use string replace() methods with proper validation to ensure exact matches before replacement.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "Which method is used to list available tools from MCP servers?",
    options: [
      "server.get_tools()",
      "server.list_tools()",
      "server.tools()",
      "server.available_tools()"
    ],
    correctAnswer: 1,
    explanation: "MCP servers expose tools through the list_tools() method, which returns available tools and their descriptions.",
    category: "MCP Implementation",
    difficulty: "easy"
  },
  {
    id: 140,
    question: "How do you implement session management in SSE servers?",
    options: [
      "Use HTTP cookies only",
      "Use session dictionaries with cleanup tasks",
      "Use database sessions",
      "Use JWT tokens"
    ],
    correctAnswer: 1,
    explanation: "SSE servers typically use session dictionaries with periodic cleanup tasks to manage client sessions and prevent memory leaks.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "What is the correct way to handle QUIC stream events?",
    options: [
      "Override quic_event_received() method",
      "Use event listeners",
      "Implement callback functions",
      "Use async generators"
    ],
    correctAnswer: 0,
    explanation: "QUIC protocol handlers override the quic_event_received() method to process different types of QUIC events like StreamDataReceived.",
    category: "Network Protocols",
    difficulty: "hard"
  },
  {
    id: 142,
    question: "Which library is commonly used for WebRTC implementation in Python?",
    options: [
      "pywebrtc",
      "aiortc",
      "webrtc-python",
      "python-webrtc"
    ],
    correctAnswer: 1,
    explanation: "aiortc is the primary Python library for WebRTC implementation, providing peer-to-peer communication capabilities.",
    category: "Network Protocols",
    difficulty: "medium"
  },
  {
    id: 143,
    question: "How do you configure ALPN protocols in QUIC?",
    options: [
      "QuicConfiguration(alpn=['h3'])",
      "QuicConfiguration(alpn_protocols=['h3'])",
      "QuicConfiguration(protocols=['h3'])",
      "QuicConfiguration(application_protocols=['h3'])"
    ],
    correctAnswer: 1,
    explanation: "QUIC configuration uses alpn_protocols parameter to specify Application-Layer Protocol Negotiation protocols like HTTP/3.",
    category: "Network Protocols",
    difficulty: "hard"
  },
  {
    id: 144,
    question: "What is the purpose of the Runner class in OpenAI Agents SDK?",
    options: [
      "Server management",
      "Agent execution and conversation handling",
      "Tool registration",
      "Authentication management"
    ],
    correctAnswer: 1,
    explanation: "The Runner class in OpenAI Agents SDK handles agent execution, conversation management, and tool invocation workflows.",
    category: "OpenAI Integration",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "How do you implement custom authentication in MCP servers?",
    options: [
      "Override authenticate() method",
      "Implement custom TokenVerifier class",
      "Use middleware functions",
      "Configure auth headers"
    ],
    correctAnswer: 1,
    explanation: "Custom MCP authentication is implemented by creating a custom TokenVerifier class and overriding the verify_token() method.",
    category: "OAuth Security",
    difficulty: "hard"
  },
  {
    id: 146,
    question: "Which parameter specifies required OAuth scopes in MCP AuthSettings?",
    options: [
      "scopes",
      "required_scopes",
      "oauth_scopes",
      "access_scopes"
    ],
    correctAnswer: 1,
    explanation: "MCP AuthSettings uses the required_scopes parameter to specify which OAuth scopes are required for accessing protected resources.",
    category: "OAuth Security",
    difficulty: "medium"
  },
  {
    id: 147,
    question: "What is the correct way to handle MCP tool parameter validation?",
    options: [
      "Manual type checking",
      "Use Pydantic models with Field() descriptions",
      "JSON schema validation",
      "Runtime type assertions"
    ],
    correctAnswer: 1,
    explanation: "MCP tools use Pydantic models with Field() descriptions for automatic parameter validation and documentation generation.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "How do you implement connection migration in QUIC?",
    options: [
      "Use connection IDs and handle address changes",
      "Restart connections automatically",
      "Use backup connections",
      "Implement custom migration logic"
    ],
    correctAnswer: 0,
    explanation: "QUIC connection migration uses connection IDs to maintain sessions across network changes, allowing seamless transitions between networks.",
    category: "Network Protocols",
    difficulty: "hard"
  },
  {
    id: 144,
    question: "Which method is used to create ASGI applications from FastMCP servers?",
    options: [
      "mcp.to_asgi()",
      "mcp.create_asgi_app()",
      "mcp.streamable_http_app()",
      "mcp.get_asgi_application()"
    ],
    correctAnswer: 2,
    explanation: "FastMCP servers use the streamable_http_app() method to create ASGI applications compatible with servers like Uvicorn and Gunicorn.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "What is the best practice for handling long-running operations in MCP tools?",
    options: [
      "Use synchronous processing",
      "Use async/await with progress reporting via ctx.report_progress()",
      "Use threading",
      "Use multiprocessing"
    ],
    correctAnswer: 1,
    explanation: "Long-running MCP tools should use async/await patterns with regular progress reporting via ctx.report_progress() to provide real-time feedback to clients.",
    category: "MCP Implementation",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "Scenario: You're building an AI assistant that needs to access a user's calendar, send emails, and query a database. Which MCP architecture would you implement?",
    options: [
      "Single MCP server with all tools",
      "Multiple specialized MCP servers (calendar, email, database) connected to one agent",
      "Direct API integrations without MCP",
      "Separate agents for each service"
    ],
    correctAnswer: 1,
    explanation: "Multiple specialized MCP servers allow for better separation of concerns, independent scaling, and easier maintenance. Each server can focus on one domain (calendar, email, database) while the agent orchestrates across all services.",
    category: "MCP Architecture Scenarios",
    difficulty: "hard"
  },
  {
    id: 147,
    question: "Scenario: Your MCP server needs to process 10,000 documents and provide real-time progress updates. What implementation approach should you use?",
    options: [
      "Synchronous processing with final result only",
      "Async processing with ctx.report_progress() every 100 documents",
      "Batch processing without progress updates",
      "Multi-threaded processing with shared state"
    ],
    correctAnswer: 1,
    explanation: "Async processing with regular progress updates (ctx.report_progress()) provides the best user experience for long-running operations, allowing clients to show progress bars and estimated completion times.",
    category: "MCP Implementation Scenarios",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Scenario: A client requests data from your MCP resource, but the underlying database is temporarily unavailable. How should your resource handler respond?",
    options: [
      "Return empty data silently",
      "Raise a descriptive exception with retry guidance",
      "Return cached data if available, otherwise raise exception",
      "Block until database is available"
    ],
    correctAnswer: 2,
    explanation: "Returning cached data when available provides better user experience, while raising descriptive exceptions when no cache exists allows clients to handle the error appropriately and potentially retry later.",
    category: "MCP Implementation Scenarios",
    difficulty: "hard"
  },
  {
    id: 149,
    question: "Scenario: You need to deploy an MCP server that will handle sensitive financial data and serve multiple enterprise clients. Which security approach is most appropriate?",
    options: [
      "Basic API key authentication",
      "OAuth 2.1 with PKCE and JWT token validation",
      "No authentication (rely on network security)",
      "Simple username/password authentication"
    ],
    correctAnswer: 1,
    explanation: "OAuth 2.1 with PKCE provides enterprise-grade security with proper token validation, scope management, and protection against various attack vectors, essential for sensitive financial data.",
    category: "OAuth Security Scenarios",
    difficulty: "hard"
  },
  {
    id: 150,
    question: "Scenario: Your AI agent needs to decide between using an MCP tool or accessing data through an MCP resource. The agent needs to analyze and modify user documents. What should it use?",
    options: [
      "Use resources to read documents, then tools to modify them",
      "Use only tools for both reading and writing",
      "Use only resources for both operations",
      "Use direct file system access"
    ],
    correctAnswer: 0,
    explanation: "Resources are perfect for read-only access to documents (app-controlled), while tools should be used for modifications (model-controlled). This separation follows MCP's design principles and provides proper access control.",
    category: "MCP Architecture Scenarios",
    difficulty: "medium"
  }
];
