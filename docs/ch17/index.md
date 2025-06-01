# 第 17 章 计算机体系结构基础

## 目录

1. [内存与地址](./s01.md)
2. [CPU](./s02.md)
3. [设备](./s03.md)
4. [MMU](./s04.md)
5. [Memory Hierarchy](./s05.md)

现代计算机都是基于Von Neumann体系结构的，不管是嵌入式系统、PC还是服务器。这种体系结构的主要特点是：CPU（CPU，Central Processing Unit，中央处理器，或简称处理器Processor）和内存（Memory）是计算机的两个主要组成部分，内存中保存着数据和指令，CPU从内存中取指令（Fetch）执行，其中有些指令让CPU做运算，有些指令让CPU读写内存中的数据。本章简要介绍组成计算机的CPU、内存和设备以及它们之间的关系，为后续章节的学习打下基础。

---

[上一章](../ch16/index.md) | [目录](../index.md) | [下一章](../ch18/index.md) 