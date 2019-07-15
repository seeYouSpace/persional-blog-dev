## 个人博客构建

##
.env
```
# env
NODE_ENV=${NODE_ENV}

# database
SQL_HOST=${SQL_HOST}
SQL_PORT=${SQL_PORT}
SQL_USERNAME=${SQL_USERNAME}
SQL_PASSWORD=${SQL_PASSWORD}
SQL_DATABASE_NAME=${SQL_DATABASE_NAME}
```

## database
```SQL

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL DEFAULT '',
  `nickname` varchar(120) NOT NULL DEFAULT '',
  `ctime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lock` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `article_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `parent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(120) NOT NULL,
  `brief` text NOT NULL,
  `typeId` int(11) DEFAULT NULL,
  `readingQuantity` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `ctime` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_0baf5e80ac4fd3eb7ab845232a` (`typeId`),
  CONSTRAINT `FK_0baf5e80ac4fd3eb7ab845232a7` FOREIGN KEY (`typeId`) REFERENCES `article_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

```