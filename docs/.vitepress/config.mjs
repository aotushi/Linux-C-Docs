import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Linux C编程一站式学习",
  description: "编程学习文档",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      {
        text: 'I. C语言入门',
        items: [
          {
            text: '1. 程序的基本概念',
            items: [
              { text: '1. 程序和编程语言', link: '/intro/program' },
              { text: '2. 自然语言和形式语言', link: '/intro/naturalformal' },
              { text: '3. 程序的调试', link: '/intro/debug' },
              { text: '4. 第一个程序', link: '/intro/helloworld' }
            ]
          },
          {
            text: '2. 常量、变量和表达式',
            items: [
              { text: '1. 继续Hello World', link: '/ch02/s01' },
              { text: '2. 常量', link: '/ch02/s02' },
              { text: '3. 变量', link: '/ch02/s03' },
              { text: '4. 赋值', link: '/ch02/s04' },
              { text: '5. 表达式', link: '/ch02/s05' },
              { text: '6. 字符类型与字符编码', link: '/ch02/s06' }
            ]
          },
          {
            text: '3. 简单函数',
            items: [
              { text: '1. 数学函数', link: '/ch03/s01' },
              { text: '2. 自定义函数', link: '/ch03/s02' },
              { text: '3. 形参和实参', link: '/ch03/s03' },
              { text: '4. 全局变量、局部变量和作用域', link: '/ch03/s04' }
            ]
          },
          {
            text: '4. 分支语句',
            items: [
              { text: '1. if语句', link: '/ch04/s01' },
              { text: '2. if/else语句', link: '/ch04/s02' },
              { text: '3. 布尔代数', link: '/ch04/s03' },
              { text: '4. switch语句', link: '/ch04/s04' }
            ]
          },
          {
            text: '5. 深入理解函数',
            items: [
              { text: '1. return语句', link: '/ch05/s01' },
              { text: '2. 增量式开发', link: '/ch05/s02' },
              { text: '3. 递归', link: '/ch05/s03' }
            ]
          },
          {
            text: '6. 循环语句',
            items: [
              { text: '1. while语句', link: '/ch06/s01' },
              { text: '2. do/while语句', link: '/ch06/s02' },
              { text: '3. for语句', link: '/ch06/s03' },
              { text: '4. break和continue语句', link: '/ch06/s04' },
              { text: '5. 嵌套循环', link: '/ch06/s05' },
              { text: '6. goto语句和标号', link: '/ch06/s06' }
            ]
          },
          {
            text: '7. 结构体',
            items: [
              { text: '1. 复合类型与结构体', link: '/ch07/s01' },
              { text: '2. 数据抽象', link: '/ch07/s02' },
              { text: '3. 数据类型标志', link: '/ch07/s03' },
              { text: '4. 嵌套结构体', link: '/ch07/s04' }
            ]
          },
          {
            text: '8. 数组',
            items: [
              { text: '1. 数组的基本概念', link: '/ch08/s01' },
              { text: '2. 数组应用实例：统计随机数', link: '/ch08/s02' },
              { text: '3. 数组应用实例：直方图', link: '/ch08/s03' },
              { text: '4. 字符串', link: '/ch08/s04' },
              { text: '5. 多维数组', link: '/ch08/s05' }
            ]
          },
          {
            text: '9. 编码风格',
            items: [
              { text: '1. 缩进和空白', link: '/ch09/s01' },
              { text: '2. 注释', link: '/ch09/s02' },
              { text: '3. 标识符命名', link: '/ch09/s03' },
              { text: '4. 函数', link: '/ch09/s04' },
              { text: '5. indent工具', link: '/ch09/s05' }
            ]
          },
          {
            text: '10. gdb',
            items: [
              { text: '1. 单步执行和跟踪函数调用', link: '/ch10/s01' },
              { text: '2. 断点', link: '/ch10/s02' },
              { text: '3. 观察点', link: '/ch10/s03' },
              { text: '4. 段错误', link: '/ch10/s04' }
            ]
          },
          {
            text: '11. 排序与查找',
            items: [
              { text: '1. 算法的概念', link: '/ch11/s01' },
              { text: '2. 插入排序', link: '/ch11/s02' },
              { text: '3. 算法的时间复杂度分析', link: '/ch11/s03' },
              { text: '4. 归并排序', link: '/ch11/s04' },
              { text: '5. 线性查找', link: '/ch11/s05' },
              { text: '6. 折半查找', link: '/ch11/s06' }
            ]
          },
          {
            text: '12. 栈与队列',
            items: [
              { text: '1. 数据结构的概念', link: '/ch12/s01' },
              { text: '2. 堆栈', link: '/ch12/s02' },
              { text: '3. 深度优先搜索', link: '/ch12/s03' },
              { text: '4. 队列与广度优先搜索', link: '/ch12/s04' },
              { text: '5. 环形队列', link: '/ch12/s05' }
            ]
          },
          { text: '13. 本阶段总结', link: '/ch13/index' }
        ]
      },
      {
        text: 'II. C语言本质',
        items: [
          {
            text: '14. 计算机中数的表示',
            items: [
              { text: '1. 为什么计算机用二进制计数', link: '/ch14/s01' },
              { text: '2. 不同进制之间的换算', link: '/ch14/s02' },
              { text: '3. 整数的加减运算', link: '/ch14/s03' },
              { text: '4. 浮点数', link: '/ch14/s04' }
            ]
          },
          {
            text: '15. 数据类型详解',
            items: [
              { text: '1. 整型', link: '/ch15/s01' },
              { text: '2. 浮点型', link: '/ch15/s02' },
              { text: '3. 类型转换', link: '/ch15/s03' }
            ]
          },
          {
            text: '16. 运算符详解',
            items: [
              { text: '1. 位运算', link: '/ch16/s01' },
              { text: '2. 其它运算符', link: '/ch16/s02' },
              { text: '3. Side Effect与Sequence Point', link: '/ch16/s03' },
              { text: '4. 运算符总结', link: '/ch16/s04' }
            ]
          },
          {
            text: '17. 计算机体系结构基础',
            items: [
              { text: '1. 内存与地址', link: '/ch17/s01' },
              { text: '2. CPU', link: '/ch17/s02' },
              { text: '3. 设备', link: '/ch17/s03' },
              { text: '4. MMU', link: '/ch17/s04' },
              { text: '5. Memory Hierarchy', link: '/ch17/s05' }
            ]
          },
          {
            text: '18. x86汇编程序基础',
            items: [
              { text: '1. 最简单的汇编程序', link: '/ch18/s01' },
              { text: '2. x86的寄存器', link: '/ch18/s02' },
              { text: '3. 第二个汇编程序', link: '/ch18/s03' },
              { text: '4. 寻址方式', link: '/ch18/s04' },
              { text: '5. ELF文件', link: '/ch18/s05' }
            ]
          },
          {
            text: '19. 汇编与C之间的关系',
            items: [
              { text: '1. 函数调用', link: '/ch19/s01' },
              { text: '2. main函数和启动例程', link: '/ch19/s02' },
              { text: '3. 变量的存储布局', link: '/ch19/s03' },
              { text: '4. 结构体和联合体', link: '/ch19/s04' },
              { text: '5. C内联汇编', link: '/ch19/s05' },
              { text: '6. volatile限定符', link: '/ch19/s06' }
            ]
          },
          {
            text: '20. 链接详解',
            items: [
              { text: '1. 多目标文件的链接', link: '/ch20/s01' },
              { text: '2. 定义和声明', link: '/ch20/s02' },
              { text: '3. 静态库', link: '/ch20/s03' },
              { text: '4. 共享库', link: '/ch20/s04' },
              { text: '5. 虚拟内存管理', link: '/ch20/s05' }
            ]
          },
          {
            text: '21. 预处理',
            items: [
              { text: '1. 预处理的步骤', link: '/ch21/s01' },
              { text: '2. 宏定义', link: '/ch21/s02' },
              { text: '3. 条件预处理指示', link: '/ch21/s03' },
              { text: '4. 其它预处理特性', link: '/ch21/s04' }
            ]
          },
          {
            text: '22. Makefile基础',
            items: [
              { text: '1. 基本规则', link: '/ch22/s01' },
              { text: '2. 隐含规则和模式规则', link: '/ch22/s02' },
              { text: '3. 变量', link: '/ch22/s03' },
              { text: '4. 自动处理头文件的依赖关系', link: '/ch22/s04' },
              { text: '5. 常用的make命令行选项', link: '/ch22/s05' }
            ]
          },
          {
            text: '23. 指针',
            items: [
              { text: '1. 指针的基本概念', link: '/ch23/s01' },
              { text: '2. 指针类型的参数和返回值', link: '/ch23/s02' },
              { text: '3. 指针与数组', link: '/ch23/s03' },
              { text: '4. 指针与const限定符', link: '/ch23/s04' },
              { text: '5. 指针与结构体', link: '/ch23/s05' },
              { text: '6. 指向指针的指针与指针数组', link: '/ch23/s06' },
              { text: '7. 指向数组的指针与多维数组', link: '/ch23/s07' },
              { text: '8. 函数类型和函数指针类型', link: '/ch23/s08' },
              { text: '9. 不完全类型和复杂声明', link: '/ch23/s09' }
            ]
          },
          {
            text: '24. 函数接口',
            items: [
              { text: '1. 本章的预备知识', link: '/ch24/s01' },
              { text: '2. 传入参数与传出参数', link: '/ch24/s02' },
              { text: '3. 两层指针的参数', link: '/ch24/s03' },
              { text: '4. 返回值是指针的情况', link: '/ch24/s04' },
              { text: '5. 回调函数', link: '/ch24/s05' },
              { text: '6. 可变参数', link: '/ch24/s06' }
            ]
          },
          {
            text: '25. C标准库',
            items: [
              { text: '1. 字符串操作函数', link: '/ch25/s01' },
              { text: '2. 标准I/O库函数', link: '/ch25/s02' },
              { text: '3. 数值字符串转换函数', link: '/ch25/s03' },
              { text: '4. 分配内存的函数', link: '/ch25/s04' }
            ]
          },
          {
            text: '26. 链表、二叉树和哈希表',
            items: [
              { text: '1. 链表', link: '/ch26/s01' },
              { text: '2. 二叉树', link: '/ch26/s02' },
              { text: '3. 哈希表', link: '/ch26/s03' }
            ]
          },
          { text: '27. 本阶段总结', link: '/ch27/index' }
        ]
      },
      {
        text: 'III. Linux系统编程',
        items: [
          {
            text: '28. 文件与I/O',
            items: [
              { text: '1. 汇编程序的Hello world', link: '/ch28/s01' },
              { text: '2. C标准I/O库函数与Unbuffered I/O函数', link: '/ch28/s02' },
              { text: '3. open/close', link: '/ch28/s03' },
              { text: '4. read/write', link: '/ch28/s04' },
              { text: '5. lseek', link: '/ch28/s05' },
              { text: '6. fcntl', link: '/ch28/s06' },
              { text: '7. ioctl', link: '/ch28/s07' },
              { text: '8. mmap', link: '/ch28/s08' }
            ]
          },
          {
            text: '29. 文件系统',
            items: [
              { text: '1. 引言', link: '/ch29/s01' },
              { text: '2. ext2文件系统', link: '/ch29/s02' },
              { text: '3. VFS', link: '/ch29/s03' }
            ]
          },
          {
            text: '30. 进程',
            items: [
              { text: '1. 引言', link: '/ch30/s01' },
              { text: '2. 环境变量', link: '/ch30/s02' },
              { text: '3. 进程控制', link: '/ch30/s03' },
              { text: '4. 进程间通信', link: '/ch30/s04' },
              { text: '5. 练习：实现简单的Shell', link: '/ch30/s05' }
            ]
          },
          {
            text: '31. Shell脚本',
            items: [
              { text: '1. Shell的历史', link: '/ch31/s01' },
              { text: '2. Shell如何执行命令', link: '/ch31/s02' },
              { text: '3. Shell的基本语法', link: '/ch31/s03' },
              { text: '4. bash启动脚本', link: '/ch31/s04' },
              { text: '5. Shell脚本语法', link: '/ch31/s05' },
              { text: '6. Shell脚本的调试方法', link: '/ch31/s06' }
            ]
          },
          {
            text: '32. 正则表达式',
            items: [
              { text: '1. 引言', link: '/ch32/s01' },
              { text: '2. 基本语法', link: '/ch32/s02' },
              { text: '3. sed', link: '/ch32/s03' },
              { text: '4. awk', link: '/ch32/s04' },
              { text: '5. 练习：在C语言中使用正则表达式', link: '/ch32/s05' }
            ]
          },
          {
            text: '33. 信号',
            items: [
              { text: '1. 信号的基本概念', link: '/ch33/s01' },
              { text: '2. 产生信号', link: '/ch33/s02' },
              { text: '3. 阻塞信号', link: '/ch33/s03' },
              { text: '4. 捕捉信号', link: '/ch33/s04' }
            ]
          },
          {
            text: '34. 终端、作业控制与守护进程',
            items: [
              { text: '1. 终端', link: '/ch34/s01' },
              { text: '2. 作业控制', link: '/ch34/s02' },
              { text: '3. 守护进程', link: '/ch34/s03' }
            ]
          },
          {
            text: '35. 线程',
            items: [
              { text: '1. 线程的概念', link: '/ch35/s01' },
              { text: '2. 线程控制', link: '/ch35/s02' },
              { text: '3. 线程间同步', link: '/ch35/s03' },
              { text: '4. 编程练习', link: '/ch35/s04' }
            ]
          },
          {
            text: '36. TCP/IP协议基础',
            items: [
              { text: '1. TCP/IP协议栈与数据包封装', link: '/ch36/s01' },
              { text: '2. 以太网(RFC 894)帧格式', link: '/ch36/s02' },
              { text: '3. ARP数据报格式', link: '/ch36/s03' },
              { text: '4. IP数据报格式', link: '/ch36/s04' },
              { text: '5. IP地址与路由', link: '/ch36/s05' },
              { text: '6. UDP段格式', link: '/ch36/s06' },
              { text: '7. TCP协议', link: '/ch36/s07' }
            ]
          },
          {
            text: '37. socket编程',
            items: [
              { text: '1. 预备知识', link: '/ch37/s01' },
              { text: '2. 基于TCP协议的网络程序', link: '/ch37/s02' },
              { text: '3. 基于UDP协议的网络程序', link: '/ch37/s03' },
              { text: '4. UNIX Domain Socket IPC', link: '/ch37/s04' },
              { text: '5. 练习：实现简单的Web服务器', link: '/ch37/s05' }
            ]
          }
        ]
      }
    ]
  }
}) 