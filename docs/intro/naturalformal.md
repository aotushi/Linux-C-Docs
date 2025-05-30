# 2. 自然语言和形式语言

自然语言（Natural Language）就是人类讲的语言，比如汉语、英语和法语。这类语言不是人为设计（虽然有人试图强加一些规则）而是自然进化的。形式语言（Formal Language）是为了特定应用而人为设计的语言。例如数学家用的数字和运算符号、化学家用的分子式等。编程语言也是一种形式语言，是专门设计用来表达计算过程的形式语言。

形式语言有严格的语法（Syntax）规则，例如，3+3=6是一个语法正确的数学等式，而3=+6$则不是，H₂O是一个正确的分子式，而₂Zz则不是。语法规则是由符号（Token）和结构（Structure）的规则所组成的。Token的概念相当于自然语言中的单词和标点、数学式中的数和运算符、化学分子式中的元素名和数字，例如3=+6$的问题之一在于$不是一个合法的数也不是一个事先定义好的运算符，而₂Zz的问题之一在于没有一种元素的缩写是Zz。结构是指Token的排列方式，3=+6$还有一个结构上的错误，虽然加号和等号都是合法的运算符，但是不能在等号之后紧跟加号，而₂Zz的另一个问题在于分子式中必须把下标写在化学元素名称之后而不是前面。关于Token的规则称为词法（Lexical）规则，而关于结构的规则称为语法（Grammar）规则。

当阅读一个自然语言的句子或者一种形式语言的语句时，你不仅要搞清楚每个词（Token）是什么意思，而且必须搞清楚整个句子的结构是什么样的（在自然语言中你只是没有意识到，但确实这样做了，尤其是在读外语时你肯定也意识到了）。这个分析句子结构的过程称为解析（Parse）。例如，当你听到"The other shoe fell."这个句子时，你理解the other shoe是主语而fell是谓语动词，一旦解析完成，你就搞懂了句子的意思，如果知道shoe是什么东西，fall意味着什么，这句话是在什么上下文（Context）中说的，你还能理解这个句子主要暗示的内容，这些都属于语义（Semantic）的范畴。

虽然形式语言和自然语言有很多共同之处，包括Token、结构和语义，但是也有很多不一样的地方：

## 形式语言与自然语言的区别

### 歧义性（Ambiguity）
自然语言充满歧义，人们通过上下文的线索和自己的常识来解决这个问题。形式语言的设计要求是清晰的、毫无歧义的，这意味着每个语句都必须有确切的含义而不管上下文如何。

### 冗余性（Redundancy）
为了消除歧义减少误解，自然语言引入了相当多的冗余。结果是自然语言经常说得啰里啰嗦，而形式语言则更加紧凑，极少有冗余。

### 与字面意思的一致性
自然语言充斥着成语和隐喻（Metaphor），我在某种场合下说"The other shoe fell"，可能并不是说谁的鞋掉了。而形式语言中字面（Literal）意思基本上就是真实意思，也会有一些例外，例如下一章要讲的C语言转义序列，但即使有例外也会明确规定哪些字面意思不是真实意思，它们所表示的真实意思又是什么。

## 形式语言与自然语言的类比

说自然语言长大的人（实际上没有人例外），往往有一个适应形式语言的困难过程。某种意义上，形式语言和自然语言之间的不同正像诗歌和说明文的区别，当然，前者之间的区别比后者更明显：

### 诗歌
- 词语的发音和意思一样重要
- 全诗作为一个整体创造出一种效果或者表达一种感情
- 歧义和非字面意思不仅是常见的而且是刻意使用的

### 说明文
- 词语的字面意思显得更重要
- 结构能传达更多的信息
- 诗歌只能看一个整体，而说明文更适合逐字句分析，但仍然充满歧义

### 程序
- 计算机程序是毫无歧义的
- 字面和本意高度一致
- 能够完全通过对Token和结构的分析加以理解

## 阅读程序的建议

1. 记住形式语言远比自然语言紧凑，所以要多花点时间来读
2. 结构很重要，从上到下从左到右读往往不是一个好办法，而应该学会在大脑里解析：识别Token，分解结构
3. 记住细节的影响，诸如拼写错误和标点错误这些在自然语言中可以忽略的小毛病会把形式语言搞得面目全非

> 注：Syntax和Grammar通常都翻译成"语法"，这让初学者非常混乱，Syntax的含义其实包含了Lexical和Grammar的规则，还包含一部分语义的规则，例如在C程序中变量应先声明后使用。即使在英文的文献中Syntax和Grammar也常混用，在有些文献中Syntax的含义不包括Lexical规则，只要注意上下文就不会误解。另外，本书在翻译容易引起混淆的时候通常直接用英文名称，例如Token没有十分好的翻译，直接用英文名称。 