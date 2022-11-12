OPEN-FALCON页面表单发送告警邮件
author:lauheng
date:20210415

功能：
--输入邮箱发送告警测试邮件，用于判断邮箱能否接到邮件及告警app能否告警。

代码结构：
--前端：index.html user.html
--后端：usercontroller.py （需要tornado和requests库）

原理：
--前端填写表单传给后端，后端POST参数请求falcon_mail.php接口

维护：
--usercontroller.py程序中将port的default值进行修改
--post的接口地址，放在UserHandler.to_mail中的post_url变量，如果接口的位置有变化则在此处进行修改。

