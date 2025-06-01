# 第 37 章 socket编程

## 目录

1. [预备知识](s01.md)
   - [1.1. 网络字节序](s01.md#11-网络字节序)
   - [1.2. socket地址的数据类型及相关函数](s01.md#12-socket地址的数据类型及相关函数)
2. [基于TCP协议的网络程序](s02.md)
   - [2.1. 最简单的TCP网络程序](s02.md#21-最简单的tcp网络程序)
   - [2.2. 错误处理与读写控制](s02.md#22-错误处理与读写控制)
   - [2.3. 把client改为交互式输入](s02.md#23-把client改为交互式输入)
   - [2.4. 使用fork并发处理多个client的请求](s02.md#24-使用fork并发处理多个client的请求)
   - [2.5. setsockopt](s02.md#25-setsockopt)
   - [2.6. 使用select](s02.md#26-使用select)
3. [基于UDP协议的网络程序](s03.md)
4. [UNIX Domain Socket IPC](s04.md)
5. [练习：实现简单的Web服务器](s05.md)
   - [5.1. 基本HTTP协议](s05.md#51-基本http协议)
   - [5.2. 执行CGI程序](s05.md#52-执行cgi程序)

socket这个词可以表示很多概念：

- 在TCP/IP协议中，"IP地址+TCP或UDP端口号"唯一标识网络通讯中的一个进程，"IP地址+端口号"就称为socket。

- 在TCP协议中，建立连接的两个进程各自有一个socket来标识，那么这两个socket组成的socket pair就唯一标识一个连接。socket本身有"插座"的意思，因此用来描述网络连接的一对一关系。

- TCP/IP协议最早在BSD UNIX上实现，为TCP/IP协议设计的应用层编程接口称为socket API。

本节的主要内容是socket API，主要介绍TCP协议的函数接口，最后简要介绍UDP协议和UNIX Domain Socket的函数接口。 