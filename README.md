_# README
```
```
_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null.false,add_index:true|
|mail|string|null.false,unique:true|
|password|string|null.false|

_### Association
_ has_many :posts
_ has_many :groups trough groups_users
_ has_many :groups_users


_postsテーブル
|Column|Type|Options|
|------|----|-------|
|user-id|integer|null:false,foreign_key:true|
|group-id|integer|null:false,foreign_key:true|
|body|text|null:false|
|image|string|

_### Association
_ belongs_to :user
_ belongs_to :group

_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|

_### Association
_ has_many :groups_users
_ has_many :users through :groups_users
_ has_many :posts


_groups-usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false,foreign_key:true|
|groups_id|integer|null:false,foreign_key:true|

_### Association
_belongs_to:user
_belongs_to:group