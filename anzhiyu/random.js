var posts=["287278eb0e01.html","f729aefc0b3f.html","0ee43e949db5.html","4cd9f71c96dc.html","8d4c30ce2923.html","ded755f9f77a.html","b900b3d1566c.html","cd2e4c752297.html","930405e221e1.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};