const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");

function APIRouter(app) {
    router.get("/friends.json", (req, resp) => {
        let db = app.get("db");

        db.collection("friends").find().toArray()
        .then(result => {
            //  json 결과 출력
            resp.status(200)
                .header({"Content-Type": "text/json;charset=utf8"})
                .json(result);
        })
    })

    return router;
};

//사용자 정보 수정
router.get("/friends/modify/:id", (req,resp)=>{
    let id= req.params.id;
    let db = app.get("db");
    db.collection("friends").findOne({id: ObjectId(req.params.id)})
      .then(result=>{
          resp.render("friends_modify",{friend:result} );
      }).catch(reason=>{
          resp.status(500)
              .send("<p>사용자 정보가 없습니다.</p>");
      })

});

router.post("/friends/update" , (req,resp)=>{
    let id= req.body.id;
    const name = req.body.name;
    const species = req.body.species;
    const age = parseInt(req.body.age);
    let db= app.get("db");
    db.collection("friends").updateOne(
             {id:req.params.id},
           { $set: 
                {name:req.body.name,  species:species.body.species , age: req.body.age}
                   
        }
    )
    .then(result=>{
        console.log(result);
        resp.status(200);
         resp.redirect("/web/friends");
        

    }).catch(reason=>{
        console.error(reason);
        resp.status(500);
          resp.send("업데이트 하지 못하였습니다.");
    })

});



//  라우터 내보내기
module.exports = APIRouter; 