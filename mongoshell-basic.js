//���� ����DB�� �ִ� �����ͺ��̽��� ���Ȯ��
show dbs
//�����ͺ��̽��� ���
use local
//Ȯ��
db

//���� collectionȮ��
show collections

//������ ���� ���� �ʿ� ����
// ������ ���ؼ��� db.dropDatabase()

// DB����Ȯ��
db.stats();


//Ư�� �÷����� ����
db.startup_log.stats();
// mydb �����ͺ��̽� ����
use mydb

// ���� �����ͺ��̽� Ȯ��
db

// title�� First Post�� ������ ����
db.posts.insert({
          "title" : "First Post"
})
//��ť��Ʈ �˻�
//1�� ���� �˻�: FINDone()
db.posts.findOne();
//JSON��ü �����
post = {
      "title" : "Second Post"
}
db.posts.save(post);
//sava: ��ť��Ʈ�� _id �ʵ尡 ������
//       insert(����)
//���� �Ѱ��� ����
post=db.posts.findOne();
post
//_id�� �����Ǿ� �ִ�.
// ��Ű���� ������ ���� �ʴ�.
post.createdAt = new Date();
// save: ��ť��Ʈ�� _id�� �ʵ尡 ������
//       update(����)
db.posts.save(post)