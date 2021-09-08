//내장객체
/*
consloe
process
exports
*/

//process객체
console.log(process.version,    //node 버전
           process.platform,    //운영체재 종류
           process.arch);        //프로세서 아키텍처

console.log(process.version);   //종속된 프로그램의 버전들
console.log(process.env);     //환경 정보

//Global 변수
console.log(__dirname);   //현재 모듈의 디렉터리
console.log(__filename);   //현재 모듈의 파일명
