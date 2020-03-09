# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# README
```
```
usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null.false,add_index:true|
|mail|string|null.false,unique:true|
|password|string|null.false|

### Association
_ has-many :post
_ has-many :groups
_ has-many : trough groups-users

postsテーブル
|Column|Type|Options|
|------|----|-------|
|user-id|integer|null:false,foreign_key:true|
|body|text|null:false|
|image|string|

### Association
_ belongs_to :user
_ belongs_to :group

groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|string|null:false|
|group_id|integer|foreign_key:true|

### Association
_ belong_to :user
_ has_many :posts
_ has_many : through :groups-users

groups-usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false,foreign_key:true|
|groups_id|integer|null:false,foreign_key:true|

### Association
_belongs_to:users
_belongs_to:groups