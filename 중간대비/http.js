// HTTP 모듈을 가져옵니다.
const http = require('http');
const { SocketAddress } = require('net');

// 서버를 생성합니다.
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP 상태 코드 200 OK
  res.setHeader('Content-Type', 'text/plain'); // 컨텐츠 타입 설정
  res.end('몰라...\n'); // 클라이언트에게 응답을 보냅니다.
});

// 서버가 3000 포트에서 듣도록 설정합니다.
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

