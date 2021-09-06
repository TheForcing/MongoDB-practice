//현재 몽고DB에 있는 데이터베이스의 목록확인
show dbs
//데이터베이스의 사용
use local
//확인
db

//현재 collection확인
show collections

//생성을 위한 절차 필요 없고
// 삭제를 위해서는 db.dropDatabase()

// DB상태확인
db.stats();


//특정 컬렉션의 정보
db.startup_log.stats();
// mydb 데이터베이스 선택
use mydb

// 선택 데이터베이스 확인
db

// title이 First Post인 문서를 삽입
db.posts.insert({
          "title" : "First Post"
})
//다큐먼트 검색
//1개 문서 검색: FINDone()
db.posts.findOne();
//JSON객체 만들기
post = {
      "title" : "Second Post"
}
db.posts.save(post);
//sava: 다큐먼트에 _id 필드가 없으면
//       insert(삽입)
//문서 한개를 선택
post=db.posts.findOne();
post
//_id가 설정되어 있다.
// 스키마가 정해져 있지 않다.
post.createdAt = new Date();
// save: 다큐멘트에 _id가 필드가 있으면
//       update(갱신)
db.posts.save(post)
// 기존 문서의 갱신(Update)
/*
db.컬렉션명.update(
              {  변경 문서의 조건  } ,
              {  $set:  
                        { 업데이트 할 내용}
              }
);
*/
db.posts.update(
            { "title" : "First Post"},
            { $set:
                      { createdAt: new Date(),
                        updateAt: new Date() }
             }
)
//객체의 삭제 : .remove
post = db.posts.findOne()
db.posts.remove(post)
             
//검색 조건 객체를 이용한 삭제
db.posts.remove({title: /Second/})

/* db.posts 컬랙션에
title: "First Post", by: "bit", likes:10
title: "Second Post", by: "hong", likes:30
title: "Third Post", by: "bit", likes:50
title: "Fourth Post", by: "hong", likes:10

Insert연습
*/
db.posts.insert({
    title: "First Post",
    by: "bit",
    likes:10
})
db.posts.insert({
    title: "Second Post",
    by: "hong",
    likes:30
})
db.posts.insert({
    title: "Third Post",
    by: "bit",
    likes:50
})
db.posts.insert({
    title: "Fourth Post",
    by: "hong",
    likes:10
})
//여러러문서를 insert-insertMany
db.posts.insertMany([
     {title: "Fifth Post",
        by: "bit",
      likes : 50},
      { title: "Sixth Post",
         by: "hong",
        likes: 50}
])
//문서의 검색
//findOne: 조건을 만족하는 문서 중 한개를 반환
// find(): 조건을 만족하는 문서의 커서를 봔환
db.posts.findOne()
db.posts.find()