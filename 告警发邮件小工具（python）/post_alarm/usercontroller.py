#!/usr/bin/env python
# coding:utf-8
import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
from tornado.options import define, options

define("port", default=8082, help="run on the given port", type=int)


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


class UserHandler(tornado.web.RequestHandler):
    def post(self):
        # user_name = self.get_argument("username")
        user_email = self.get_argument("email")
        user_name = str(user_email).split('@',1)[0]
        # user_website = self.get_argument("website")
        # user_language = self.get_argument("language")
        self.render("user.html", username=user_name, email=user_email) # website=user_website, language=user_language)
        self.to_mail(user_name)

    def to_mail(self,name):  # 调用邮件和告警接口发送测试邮件
        import requests
        import time
        subject = '[P2][PROBLEM][test_mail]'
        tos = self.get_argument("email")
        content = 'this is test email.<br/><br/> {} {}'.format(name, time.strftime("%Y-%m-%d %H:%M:%S"))
        # 构造post请求，使用默认application/x-www-form-urlencoded头部
        post_tuple = (('subject', subject), ('tos', tos), ('content', content))
        # 脱敏处理
        post_url = 'http://sample.url.com/xxxx.php'
        r = requests.post(post_url, post_tuple)
        responsedata = r.text
        return responsedata

handlers = [
    (r"/", IndexHandler),
    (r"/user", UserHandler)
]
template_path = os.path.join(os.path.dirname(__file__), "template")
if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers, template_path)
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
