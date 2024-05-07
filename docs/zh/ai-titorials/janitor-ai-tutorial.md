# 2024 全面了解Janitor AI：功能、使用教程及集成方法

## Janitor AI是什么？

- 它是一个使用最新人工智能算法构建的智能聊天机器人。
- 用户可以与其他用户创建的角色互动，或创建自己的角色。
- 它使用高级的自然语言处理（NLP）技术，能够像人类一样聊天，非常适合信息检索和客户支持。

## Janitor AI的特点

- 理解人类语言：基于NLP技术，能够理解用户输入的内容并提供相关准确的响应。
- 上下文理解：能够理解对话的上下文，生成更精确和相关的回答。
- 多渠道支持：可以集成到各种平台和渠道，如网站、消息应用程序和社交媒体平台。
- 自动化数据清理：使用智能工具整理数据，快速计数不同的组合并进行交叉制表。
- 个性化：可以创建和设计符合特定需求的角色机器人。
- 强大的知识库：可以连接知识库和数据库，从而在响应用户查询时提取数据或信息。

## 如何注册Janitor AI？

### 访问 Janitor AI 网站

首先，访问官方 [Janitor AI 网站](https://www.janitorai.com/)。您可以通过桌面或移动设备上的任何网络浏览器访问它。

### 注册账号

在网站上点击注册选项。

![Janitor AI 点击注册](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729356.png)

*点击注册*

![Janitor AI 用 Google 注册](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729862.png)

*用 Google 注册*

我将以用 Google 注册为例。点击用 Google 注册。在某些情况下，它会要求您再次登录您的 Google 账号。否则，它会直接重定向到这里。

![Janitor AI 我的个人资料](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729654.png)

*我的个人资料*

提供所需的信息以设置您的账户。一旦注册，您就可以访问 Janitor AI 提供的众多功能和特点。

## 如何设置Janitor AI的API？
   - 尽管Janitor AI目前免费使用，但如果想要与角色聊天，必须获得API密钥。
   - API密钥可以是OpenAI API密钥或Kobold AI API密钥，但这些密钥不是免费的。

尽管 Janitor AI 目前是免费使用的，但如果您想与角色聊天，您必须获取一个 API 密钥。

应用程序编程接口（API）是允许不同软件应用程序相互沟通的规则。Janitor AI 的 API 密钥可以是 OpenAI API 密钥或 Kobold AI API 密钥。但这些密钥不是免费的。

例如，假设您想与 Kai Brown 聊天。点击他的图片，然后点击与 Kai Brown 聊天。您会收到提醒：“API 未准备好！点击设置”。

![Janitor AI 与 Kai Brown 聊天](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729964.png)

*与 Kai Brown 聊天*

![Janitor AI 与 Kai Brown 聊天](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729429.png)

*与 Kai Brown 聊天*

*API 未准备好*

您有 3 个选项来获取 API 密钥。它们是 OpenAI API 密钥，OpenAI 反向代理和 Kobold AI API 密钥。**我将以 OpenAI API 密钥为例，向您展示设置 API 的过程。**

### 使用 OpenAI API 密钥

OpenAI 不是免费的。他们提供 5 美元试用，相当于大约 500 条信息。所以，如果您想免费使用 Janitor AI，您只能与角色机器人聊天最多 500 条信息。

如果您看到有关配额或账单的错误，这意味着您已经用完了 OpenAI 试用的 5 美元额度。之后，您需要支付给 OpenAI 才能使用他们的 API。

**注意：** 此密钥只存储在您的本地设备上，永远不会发送到服务器。

以下是从 OpenAI 获取 API 的逐步指南

1.  注册或登录您的 [OpenAI](https://chat.openai.com/auth/login) 账号。
2.  点击屏幕右上角的 **个人资料**。
3.  点击 **API 密钥**。
4.  点击 **创建新的密钥**。
5.  命名您的新密钥并再次点击 **创建新的密钥** 来获取您的 API。

![OpenAI 点击创建新密钥](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071729482.png)

*点击创建新密钥*

![OpenAI 命名新密钥](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730421.png)

*命名新密钥*

*新密钥已创建*

将 API 复制粘贴到下面的输入框中。

![Janitor AI 将 API 粘贴到下面的输入框中](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730523.png)

*将 API 粘贴到下面的输入框中*

现在显示 API 密钥有效。点击保存设置，现在你可以开始和机器人聊天了！

![Janitor AI API 密钥有效](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730653.png)

*API 密钥有效*

![Janitor AI 点击保存设置](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730469.png)

*点击保存设置*

![Janitor AI API 已准备好](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730711.png)

*API 已准备好*

### 使用 OpenAI 反向代理

OpenAI 反向代理是由社区贡献的。但是，它们可能会慢或不稳定，有时您可能会得到奇怪的结果。

![Janitor AI 使用 OpenAI 反向代理](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730831.png)

*使用 OpenAI 反向代理*

### 使用 Kobold AI API 密钥

您也可以使用 Kobold AI API 密钥来访问 Janitor AI。然而，这种选项并不是免费的。您可以以每小时 0.20 美元的价格租用 GPU。

![Janitor AI 使用 Kobold AI API 密钥](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730567.png)

*使用 Kobold AI API 密钥*

## 如何与Janitor AI聊天？
   - 设置好个人资料和API后，就可以与网站上的各种角色互动了。

在成功设置您的个人资料和 API 之后，您已经准备好与网站上展示的各种角色进行交互了。

1.  探索趋势页面上的角色阵列，或通过其他标签导航以发现吸引您兴趣的角色。搜索功能也可用于找到特定角色。

![Janitor AI 探索趋势页面上的角色阵列](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730508.png)

*探索趋势页面上的角色阵列*

3.  选择一个角色。这个操作将引导您到该角色的个人页面。点击下方的与（角色）聊天按钮。现在，您已经准备好与所选角色进行聊天了。

![Janitor AI 按下方的与（角色）聊天按钮](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730982.png)

*按下方的与（角色）聊天按钮*


##  如何在Janitor AI上创建角色？
1.  从 Janitor AI 首页开始。选择页面右上角的创建角色。

![Janitor AI 选择创建角色](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071730713.png)

*选择创建角色*

2. 按照您的意愿完成所有必要的字段。

3.  上传一个头像来视觉上代表您的角色。
4.  为您的角色选择合适的标签。
5.  决定您的角色机器人是公开还是私有，以及它是否应该是适合工作（SFW）或不适合工作（NSFW）。

![如何在 Janitor AI 上创建角色](https://usacdn.wangdu.site/file/blog-cdn/WP-CDN-02/2024/202405071731376.png)

*如何在 Janitor AI 上创建角色*

6. 填写完所有内容后，点击创建角色按钮。
7. 您的角色现在已经准备好聊天了。

注意：如果您的角色设置为公开，其他用户也将被允许与您的角色聊天。

## 如何将 Janitor AI 作为 API 集成到项目中？

除了通过网站界面作为基本的在线聊天机器人使用 Janitor AI 外，您还可以使用提供的 API 和开发者资源将其集成到您的项目中。

对于希望将 Janitor AI 集成到他们的项目或平台的开发者或企业，该过程需要几个额外的步骤：

1.  **API 集成：** 它从使用提供的 API 或软件开发套件（SDKs）将 Janitor AI 集成到期望的平台或应用开始。
2.  **训练模型：** 在您添加了 Janitor AI 之后，您需要使用合适的数据集和对话日志对其进行训练。这一步是让聊天机器人理解并更好地响应的关键。训练数据越合适，聊天机器人的工作效果越好。
3.  **定制：** Janitor AI 允许您进行大量定制。您可以改变模型的响应方式，设置其语气，甚至将其品牌化以匹配您的机构。这确保了聊天机器人工作良好，符合您机构的风格和需求。
4.  **测试：** 一旦您设置并定制了聊天机器人，您需要对其进行彻底的测试。这对于发现任何问题并改进聊天机器人的工作方式很重要。
5.  **持续监控：** 关注聊天机器人的互动情况，收集用户反馈，并实施必要的更新和增强。这确保了聊天机器人随着时间的推移保持有效，相关并且有益。


## 将 Janitor AI 添加到项目中

Janitor AI 的灵活性使其成为许多项目的绝佳工具。以下是您可以如何使用它：

- **网站和应用程序使用：** 您可以将 Janitor AI 添加到您的网站或应用程序中，让用户与机器人聊天并获取个性化帮助。这使您的平台更具吸引力。
- **自动化客户支持：** 将 Janitor AI 添加到您的客户支持中，以自动回答常见的问题和问题。它可以处理基本问题，提供有用信息，并将更难的问题转给人类代理。

- **增强虚拟助手：** 如果您已经有一个虚拟助手，添加 Janitor AI 可以使其变得更好。它可以理解自然语言并查找信息，使您的助手更加智能和准确。

- **分析数据：** 训练 Janitor AI 查看数据并为您提供有用的见解。这在您需要理解数据并基于数据做出决策的项目中很有帮助。Janitor AI 可以帮助您在大型数据集中找到重要信息，并帮助您基于数据做出决策。

- **教育和在线学习：** 在教育项目中使用 Janitor AI 作为虚拟教师或学习助手。它可以回答学生问题，解释事物，并根据每个学生的需求和进度提供个性化学习建议。

- **内容创建：** 在内容创建项目中使用 Janitor AI 的自然语言生成能力。它可以创造文本，编写文章，摘要或产品描述，为您节省时间和精力。

- **自动化任务：** Janitor AI 可以在不同的项目中自动化重复性任务。通过与其他系统和工具合作，它可以执行数据输入，制作报告和调度等工作，从而释放人们从事更复杂和创造性的任务。

## Janitor AI的局限性

- **缺乏情感智能：** 尽管在自然语言处理（NLP）方面表现出色，但 Janitor AI 本质上仍然是一个 AI 模型。因此，它可能无法完全掌握或反应人类互动中通常存在的情感微妙之处。虽然它可以有效处理和回复文本输入，但识别用户情绪或表达同情超出了它的能力范围。

- **处理复杂查询的能力不足：** 对于需要更深层次理解或分析的复杂或模糊问题，Janitor AI 可能会遇到困难。如果一个问题有很多部分或者相当棘手，由于编程和训练的限制，聊天机器人可能无法给出一个好的答案。

- **NSFW：** 用户应该注意，Janitor AI 允许某些可能不适合工作场所的内容（NSFW）。

- **无法处理陌生场景：** Janitor AI 的性能在很大程度上依赖于其培训。如果遇到新的或意料之外的情况，并且在其训练中没有涵盖，它可能难以做出正确的反应。虽然它可以随着时间的推移学习和调整，但并非肯定能够很好地管理每一个意料之外的情况。

## 最终评价

Janitor AI 是一个有趣的工具，它可以让您轻松地与一系列角色聊天，使您的日子更加愉快且不那么无聊。但是，它确实包含相当数量的 NSFW 内容，因此它并不是专业内容创作的最佳选择。如果你正在寻找准确和专业的回应，尝试 GPT 4.0 版本可能会更好。


## 常见问题

   - Janitor AI是否有应用程序？截至2023年6月11日，Janitor AI没有独立的移动应用程序，主要通过其Web界面访问。
   - Janitor AI是否免费使用？是的，Janitor AI目前免费使用，但要与机器人聊天，必须获得API密钥，这需要支付OpenAI服务的费用。