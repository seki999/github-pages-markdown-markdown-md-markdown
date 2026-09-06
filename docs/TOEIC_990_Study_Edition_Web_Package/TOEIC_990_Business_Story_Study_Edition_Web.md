---
title: TOEIC 990 Business Story Study Edition
description: 逐段中英对照 + 人物关系图 + 时间线图 + 可直接发布到网站的 Mermaid 优化版
mermaid: true
---

# TOEIC 990 商务剧情故事：精读背诵版（Web Study Edition）

> 本版在前面文件基础上继续增强，重点新增了：
>
> - **分段中英对照**（按剧情段落组来精读，更适合背诵）
> - **人物关系图**（CEO / CFO / 法务 / 财务 / Leo / 佐藤先生）
> - **时间线图**（Mon → Tue → Wed → ...）
> - **更紧凑、更适合网页发布的 Mermaid 图**
> - **已保留插图引用**，适合在 Obsidian / Typora / VS Code / MkDocs 中阅读

## 文件使用说明

- 这个 MD 文件与图片放在**同一文件夹**即可正常显示插图。
- 如果你用于静态网站，Mermaid 图通常可以直接渲染。
- 英文原文仍然完整保留，便于继续背词与精读。

## 插图资源

- `scene1_merger_boardroom.png`
- `scene2_prototype_missing.png`
- `scene5_press_conference.png`
- `scene12_janitor_reveal.png`

---

## 人物关系图（优化版）

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#E8F0FE',
  'primaryTextColor': '#1F2937',
  'primaryBorderColor': '#4F46E5',
  'lineColor': '#64748B',
  'secondaryColor': '#FEF3C7',
  'tertiaryColor': '#ECFCCB'
}}}%%
flowchart LR
    CEO[Mara Vale
CEO]
    CFO[CFO
财务负责人]
    LEGAL[Legal Team
法务部]
    FIN[Finance Team
财务团队]
    LEO[Leo
实习生]
    SATO[Mr. Sato
清洁工 / 控股股东]
    NS[Northstar Analytics
并购对象 / 竞争方]

    CEO -->|推动并购| NS
    CEO -->|承受媒体压力| LEGAL
    CEO -->|被财务追问| FIN
    CFO -->|解释数字异常| FIN
    LEGAL -->|要求合规与二次审计| CEO
    FIN -->|发现公式错误| CFO
    LEO -->|记录一切 / 提关键问题| CEO
    SATO -->|最终揭示 51% 投票权| CEO
    SATO -->|最终控制公司| CFO
    SATO -->|真正的公司掌权者| LEGAL
```

## 时间线图（Mon → Tue → Wed ...）

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#EEF2FF',
  'primaryBorderColor': '#6366F1',
  'primaryTextColor': '#111827',
  'lineColor': '#94A3B8'
}}}%%
flowchart LR
    M1[Mon
宣布并购] --> T1[Tue
原型失踪]
    T1 --> W1[Wed
财务发现异常]
    W1 --> TH1[Thu
法务接管]
    TH1 --> F1[Fri AM
记者会翻车]
    F1 --> F2[Fri PM
市场反噬]
    F2 --> S1[Sat
临时救火]
    S1 --> SU1[Sun 2AM
董事会投票]
    SU1 --> M2[Next Mon
竞争对手报价]
    M2 --> X1[Twist 1
黑客在工资单上]
    X1 --> X2[Twist 2
工资单是假的]
    X2 --> X3[Final Twist
佐藤先生持股 51%]
    X3 --> EPI[Epilogue
危机收束]
```

## 反转链条图（紧凑版）

```mermaid
%%{init: {'theme': 'base'}}%%
flowchart TD
    A[大家以为这是普通并购] --> B[原型机失踪]
    B --> C[怀疑外部攻击]
    C --> D[怀疑内部人员]
    D --> E[发现工资单异常]
    E --> F[发现虚构高管与部门]
    F --> G[真正控股者是清洁工佐藤先生]
```

---
## 1. Monday: The Merger Nobody Read
![章节插图](./scene1_merger_boardroom.png)
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[宣布并购] --> B[会议混乱升级] --> C[没人读附件]
```
### 中文导读
故事从一间充满咖啡味和官僚气息的会议室开始。公司宣布并购，但董事会从一开始就在“放弃、吸收损失、加快推进、追查同伙”之间来回摇摆，荒诞感迅速升高。

### 分段中英对照
#### 段落组 1（English）
The boardroom smelled of coffee, ambition, and one printer that had been “temporarily broken” since 2024.

The board chose to **abandon** the vanity project; someone tried to **abduct** our prototype drone; the parent company agreed to **absorb** the loss; we found an **abuse** of corporate privileges; the ceo wanted to **accelerate** the rollout. The dashboard was **accessible** to every department; security identified an alleged **accomplice**; the cfo had to **account for** every missing yen; our **accountant** stopped smiling.

Small errors began to **accumulate**; the forecast proved surprisingly **accurate**; the minutes unexpectedly mentioned **activism**; one analyst seemed **addicted to** spreadsheets; the war room was **adjacent to** the cafeteria. The minutes unexpectedly mentioned **administration**; the vendor finally had to **admit** the mistake; the team tried to **advance** the negotiation; someone raised **adversity** during the meeting.

The risk register added **advertisement**; the risk register added **aerospace**; the risk register added **affidavit**; the proposal looked **affluent** at first; the product had to remain **affordable**. Our lawyers suddenly cared about **aftershock**; the minutes unexpectedly mentioned **agent**; the consultant described the risk as **aggressive**; a slide was mysteriously titled **agony column**.

Management decided to **aid** before lunch; management decided to **allege** before lunch; the minutes unexpectedly mentioned **allergy**; the risk register added **alliance**; the risk register added **allocation**. The new plan required us to **alter** immediately; the consultant described the risk as **amateur**; the minutes unexpectedly mentioned **ambulance**; the hidden fees **amounted to** a small fortune.

#### 段落组 1（中文对照）
故事从一间充满咖啡味和官僚气息的会议室开始。公司宣布并购，但董事会从一开始就在“放弃、吸收损失、加快推进、追查同伙”之间来回摇摆，荒诞感迅速升高。

#### 段落组 2（English）
The new plan required us to **anchor** immediately; the board called the situation **animated**; the new plan required us to **annoy** immediately; the audit trail contained **antibiotic**; the board called the situation **antitrust**. The market suddenly seemed **apologetic**; our lawyers suddenly cared about **apology**; the board asked whether we should **apparel**; the minutes unexpectedly mentioned **application**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The crisis forced us to **appraise**; one executive tried to **apprehend** without approval; someone raised **arraignment** during the meeting; someone raised **arson** during the meeting; the board called the situation **artificial**. The risk register added **assailant**; the board asked whether we should **assassinate**; management decided to **assemble** before lunch; management decided to **assert** before lunch.

The audit trail contained **asset**; management decided to **assimilate** before lunch; someone raised **asthma** during the meeting; someone raised **astronomer** during the meeting; the consultant described the risk as **atomic**. The board asked whether we should **attain**; the proposal looked **attentive** at first; we could **attribute** the outage **to** one bad script; one executive tried to **audit** without approval.

The consultant described the risk as **authentic**; the proposal looked **authoritative** at first; the revised contract was **available for** review; a junior engineer helped **avert** disaster; the market suddenly seemed **backward**. We had to **balance** speed **against** reliability; legal proposed a **ban on** unofficial plug-ins; the minutes unexpectedly mentioned **bandwagon**; our lawyers suddenly cared about **banker**.

Someone raised **bankruptcy** during the meeting; procurement began to **bargain over** the price; the valuation was **based on** optimistic assumptions; we should have tested it **beforehand**; the new plan required us to **beguile** immediately. The board asked whether we should **belittle**; the delay was oddly **beneficial to** us; the new plan required us to **beset** immediately; the board called the situation **bilateral**.

#### 段落组 2（中文对照）
接下来，会议纪要、风险登记表和各种顾问意见像雪片一样飞来。管理层不断“立即行动”，Leo 则在一旁认真记录，并开始怀疑所谓 stakeholder alignment 是否真的是一种病。

#### 段落组 3（English）
The proposal looked **binocular** at first; the minutes unexpectedly mentioned **biohazard**; the risk register added **biosphere**; someone raised **birthrate** during the meeting; the message looked like an attempt to **blackmail** the ceo. Management decided to **blast** before lunch; the crisis forced us to **blood**; the proposal looked **bogus** at first; the crisis created an unexpected **bond** between rivals. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Ai consulting was enjoying a **boom**; one executive tried to **bootleg** without approval; someone raised **borrowing** during the meeting; one executive tried to **bounce** without approval; someone raised **boundary** during the meeting. The crisis forced us to **boycott**; the board asked whether we should **brand**; someone raised **breakup** during the meeting; the crisis forced us to **bribe**.

The board asked whether we should **broadcast**; management decided to **bruise** before lunch; the project was already **over budget**; the new plan required us to **bully** immediately; the risk register added **bystander**. The new plan required us to **calculate** immediately; the board called the situation **candid**; the board called the situation **canny**; the founder dreamed of a huge **capital gain**.

One executive tried to **capitalize** without approval; one executive tried to **capitulate** without approval; the board asked whether we should **care**; the consultant described the risk as **careless**; our **cash flow** suddenly mattered more than our slogans. The risk register added **catalyst**; the revised plan sounded **catching**; the proposal looked **causal** at first; the crisis forced us to **celebrate**.

The proposal looked **cellular** at first; the board asked whether we should **censure**; the audit trail contained **chaos**; the revised plan sounded **characteristic**; the minutes unexpectedly mentioned **charisma**.

The first day ended with one certainty: nobody had read the attachment titled FINAL_v7_REALLY_FINAL.pdf.

#### 段落组 3（中文对照）
到了本节后半，法务、审计、市场、采购与财务全都卷入这场并购闹剧。所有人都在讨论速度、风险、现金流和估值，但真正关键的问题是：根本没人认真读那份附件。

---
## 2. Tuesday: The Prototype Disappears
![章节插图](./scene2_prototype_missing.png)
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[原型失踪] --> B[全员追查] --> C[发现只是寄回本公司]
```
### 中文导读
周二早上，安保来电：原型机不见了，而监控只拍到一条空走廊。公司立刻进入追查模式，各部门在混乱中不断新增风险、会议和沟通动作。

### 分段中英对照
#### 段落组 1（English）
At 9:07 a.m., security called. The prototype was gone; the security camera, naturally, had excellent footage of an empty corridor.

The crisis forced us to **chase**; our lawyers suddenly cared about **chemotherapy**; the revised plan sounded **chronic**; the board called the situation **civic**; the market suddenly seemed **civilian**. One executive tried to **clamp** without approval; one executive tried to **clash** without approval; the risk register added **clearance**; someone raised **climate** during the meeting.

The risk register added **clone**; the board called the situation **coarse**; the new plan required us to **coddle** immediately; the consultant described the risk as **coherent**; the revised plan sounded **collateral**. The consultant described the risk as **colloquial**; the market suddenly seemed **colonial**; our lawyers suddenly cared about **commerce**; the audit trail contained **commercialism**.

The board refused to **commit to** a date; someone raised **commodity** during the meeting; the crisis forced us to **communicate**; the board called the situation **comparable**; hr discussed **compensation** for the overtime. The consultant described the risk as **competent**; the audit trail contained **competitor**; the proposal looked **complicated** at first; management decided to **compound** before lunch.

The proposal looked **computer-literate** at first; the crisis forced us to **conceal**; the risk register added **concession**; one executive tried to **concoct** without approval; the auditors **concurred with** legal counsel. The new plan required us to **condone** immediately; management decided to **confederate** before lunch; the audit trail contained **conference**; the market suddenly seemed **confident**.

#### 段落组 1（中文对照）
周二早上，安保来电：原型机不见了，而监控只拍到一条空走廊。公司立刻进入追查模式，各部门在混乱中不断新增风险、会议和沟通动作。

#### 段落组 2（English）
The new plan required us to **confirm** immediately; the market suddenly seemed **congenital**; the new plan required us to **conjecture** immediately; someone raised **conscience** during the meeting; the consultant described the risk as **consecutive**. The minutes unexpectedly mentioned **consequence**; the minutes unexpectedly mentioned **conservationist**; the consultant described the risk as **conspicuous**; the revised plan sounded **constituent**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Someone raised **constitution** during the meeting; management decided to **consume** before lunch; a slide was mysteriously titled **consumer price index**; one executive tried to **contemplate** without approval; the risk register added **contempt**. One executive tried to **contort** without approval; the proposal looked **contrary** at first; each department had to **contribute to** the recovery plan; we struggled to **keep the situation under control**.

The board asked whether we should **convene**; the new plan required us to **convey** immediately; the risk register added **conviction**; the new plan required us to **cooperate** immediately; the proposal looked **cordial** at first. The revised plan sounded **corporate**; our lawyers suddenly cared about **corporation**; the consultant described the risk as **correspondent**; the crisis forced us to **corrupt**.

The risk register added **cost-conscious**; the board asked whether we should **count**; the crisis forced us to **counterfeit**; the consultant described the risk as **cozy**; our lawyers suddenly cared about **craft**. The proposal looked **crass** at first; the consultant described the risk as **credible**; someone raised **creditor** during the meeting; the audit trail contained **criminology**.

Management decided to **cripple** before lunch; the minutes unexpectedly mentioned **criticality**; someone raised **critique** during the meeting; the revised plan sounded **crucial**; the crisis forced us to **culminate**. Management decided to **cure** before lunch; the risk register added **custody**; the new plan required us to **cut** immediately; the minutes unexpectedly mentioned **cyberspace**.

#### 段落组 2（中文对照）
随着调查推进，董事会拒绝轻易承诺时间表，HR 开始谈加班补偿，审计与法务也加入判断。大家一边猜测，一边试图恢复控制，局面越描越乱。

#### 段落组 3（English）
Management decided to **dangle** before lunch; one executive tried to **daunt** without approval; management decided to **deal** before lunch; the new plan required us to **debate** immediately; the risk register added **debtor**. The crisis forced us to **declare**; one executive tried to **deduce** without approval; our lawyers suddenly cared about **deduction**; the borrower was close to **default on** its loan. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The crisis forced us to **defend**; someone raised **deficit** during the meeting; our lawyers suddenly cared about **deflation**; the new plan required us to **defuse** immediately; one executive tried to **delete** without approval. The crisis forced us to **deliver**; customers continued to **demand** an explanation; the new plan required us to **demean** immediately; the crisis forced us to **denounce**.

The revised plan sounded **dental**; one executive tried to **depart** without approval; the board asked whether we should **depict**; the buyer paid a **deposit on** the equipment; the audit trail contained **depression**. The consultant described the risk as **derelict**; the audit trail contained **dermatologist**; management decided to **desert** before lunch; the risk register added **desktop**.

The risk register added **detection**; the minutes unexpectedly mentioned **detention**; the board asked whether we should **deteriorate**; the minutes unexpectedly mentioned **device**; the new plan required us to **diagnose** immediately. Our lawyers suddenly cared about **dictator**; the crisis forced us to **diffuse**; the consultant described the risk as **digital**; the crisis forced us to **diminish**.

The proposal looked **dire** at first; the proposal looked **disabled** at first; the proposal looked **disastrous** at first; the crisis forced us to **discern**; management decided to **disclaim** before lunch.

Security found the missing prototype in a delivery crate addressed to Helix itself. Nobody laughed except the courier.

#### 段落组 3（中文对照）
本节后半继续堆高危机张力：董事会开会、各部门协作、风险条目增加、调查手段扩展。最终，安保发现原型机其实就在寄回本公司的送货箱里，这个反转充满黑色幽默。

---
## 3. Wednesday: Finance Discovers Gravity
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[财务接手] --> B[怀疑巨额异常] --> C[真相是公式错误]
```
### 中文导读
周三由财务部接管叙事。股东关心分红，管理层担忧裁员与漂流般的局势，市场也开始怀疑公司的稳健性。

### 分段中英对照
#### 段落组 1（English）
Finance entered the story like a thunderstorm wearing a tie.

The minutes unexpectedly mentioned **disclosure**; the board asked whether we should **discredit**; management decided to **disinfect** before lunch; the new plan required us to **dismiss** immediately; the risk register added **disruption**. The board asked whether we should **dissipate**; one executive tried to **distribute** without approval; the crisis forced us to **dive**; the board wanted to **diversify into** health technology.

Shareholders still asked about the **dividend**; our lawyers suddenly cared about **dizziness**; the risk register added **donor**; the consultant described the risk as **dormant**; the consultant described the risk as **dour**. Management quietly planned to **downsize** one division; one executive tried to **draft** without approval; the crisis forced us to **drift**; the market suddenly seemed **dubious**.

The market suddenly seemed **dumb**; the risk register added **duty**; the minutes unexpectedly mentioned **earnings**; the proposal looked **eco-conscious** at first; the audit trail contained **economics**. Someone raised **economy** during the meeting; the audit trail contained **editor**; a slide was mysteriously titled **educational toys**; the new policy **took effect** at midnight.

One executive tried to **elicit** without approval; management decided to **emancipate** before lunch; management decided to **embed** before lunch; management decided to **embrace** before lunch; one executive tried to **empathize** without approval. Someone raised **employee** during the meeting; the minutes unexpectedly mentioned **encryption**; the crisis forced us to **endeavor**; the crisis forced us to **endorse**.

#### 段落组 1（中文对照）
周三由财务部接管叙事。股东关心分红，管理层担忧裁员与漂流般的局势，市场也开始怀疑公司的稳健性。

#### 段落组 2（English）
The risk register added **energy**; the new plan required us to **engineer** immediately; we added tests to **ensure that** it would not happen again; one executive tried to **entertain** without approval; the risk register added **entrepreneur**. A slide was mysteriously titled **environmental assessment**; the risk register added **envy**; the revised plan sounded **equal**; the audit trail contained **equipment**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The risk register added **eradication**; the proposal looked **essential** at first; the audit trail contained **estate**; the emergency checklist included **ethnic minority**; management decided to **evaluate** before lunch. The minutes unexpectedly mentioned **evolution**; our lawyers suddenly cared about **excess**; management decided to **exclude** before lunch; the proposal looked **executive** at first.

The crisis forced us to **exhibit**; the crisis forced us to **expedite**; travel **expenses** became a running joke; one executive tried to **expire** without approval; one executive tried to **explode** without approval. The audit trail contained **explosive**; the risk register added **exposure**; the audit trail contained **extinction**; the proposal looked **extraordinary** at first.

The risk register added **eyewitness**; one executive tried to **facilitate** without approval; the minutes unexpectedly mentioned **farce**; one executive tried to **fascinate** without approval; the revised plan sounded **fastidious**. The audit trail contained **feature**; the board asked whether we should **ferment**; the market suddenly seemed **festive**; our lawyers suddenly cared about **fever**.

The audit trail contained **file**; the board called the situation **financial**; the board called the situation **fiscal**; the board asked whether we should **flee**; the crisis forced us to **flock**. The minutes unexpectedly mentioned **flora**; the new plan required us to **flourish** immediately; the new plan required us to **focus** immediately; the agenda carried the phrase **food poisoning**.

#### 段落组 2（中文对照）
中段继续扩展到收益、经济、员工、加密、能源、环保评估和差旅费用等话题。财务、运营、法务和公关在同一个锅里翻滚，危机看上去像是全面恶化。

#### 段落组 3（English）
The **foreign exchange** desk noticed the first anomaly; someone raised **forgery** during the meeting; the minutes unexpectedly mentioned **formula**; the minutes unexpectedly mentioned **fortune**; the new plan required us to **found** immediately. The market suddenly seemed **frail**; our lawyers suddenly cared about **fraud**; the new plan required us to **freeze** immediately; the crisis forced us to **frustrate**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The board agreed to **fund** the rescue plan; the minutes unexpectedly mentioned **future**; our lawyers suddenly cared about **galaxy**; the minutes unexpectedly mentioned **garbage**; the crisis forced us to **gather**. The agenda carried the phrase **general strike**; the emergency checklist included **genetic engineering**; the proposal looked **genial** at first; the crisis forced us to **gloat**.

A slide was mysteriously titled **global warming**; management decided to **gnaw** before lunch; the new plan required us to **goad** immediately; the crisis forced us to **gossip**; our lawyers suddenly cared about **gravity**. The emergency checklist included **greenhouse effect**; management decided to **groom** before lunch; the emergency checklist included **gross domestic product**; no consultant could **guarantee** success.

Management decided to **gush** before lunch; one executive tried to **head** without approval; hr changed the **health insurance** provider; our lawyers suddenly cared about **hearsay**; the consultant described the risk as **herbivorous**. The emergency checklist included **high-definition television**; the board asked whether we should **hijack**; someone raised **holding** during the meeting; the risk register added **homicide**.

Someone raised **hook** during the meeting; the risk register added **horizon**; the board asked whether we should **hospitalize**; the audit trail contained **house**; the risk register added **humanism**.

The CFO proved that the “missing millions” were mostly a spreadsheet formula copied one column too far.

#### 段落组 3（中文对照）
直到本节结尾，真相才显现：所谓“失踪的数百万资金”并非惊天金融犯罪，而是电子表格公式多拖了一列。公司差点被一个 Excel 错误吓到精神失常。

---
## 4. Thursday: Legal Learns to Sweat
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[法务进场] --> B[二次审计] --> C[保密合同泄露]
```
### 中文导读
周四，法务部门登场，气氛骤然转冷。法务要求重新识别责任、启动二次审计，并把问题从技术与财务事故升级成合规与治理问题。

### 分段中英对照
#### 段落组 1（English）
Legal arrived with three laptops, five warnings, and the emotional warmth of a parking ticket.

The board asked whether we should **humiliate**; the audit trail contained **hydrocarbon**; someone raised **hypothesis** during the meeting; management decided to **identify** before lunch; the minutes unexpectedly mentioned **immigrant**. The market suddenly seemed **immune**; the new plan required us to **imperil** immediately; the new plan required us to **impose** immediately; the minutes unexpectedly mentioned **impunity**.

The minutes unexpectedly mentioned **income**; costs continued to **increase by** nearly ten percent; the new plan required us to **indicate** immediately; the board called the situation **indifferent**; our lawyers suddenly cared about **industry**. The revised plan sounded **infatuated**; the risk register added **inflation**; a slide was mysteriously titled **informed source**; management decided to **infuse** before lunch.

The crisis forced us to **inherit**; the revised plan sounded **initial**; the board asked whether we should **inject**; the risk register added **insider**; the chair **insisted on** a second audit. One executive tried to **inspect** without approval; our lawyers suddenly cared about **institution**; the claim was covered by **insurance**; someone raised **intake** during the meeting.

The consultant described the risk as **interactive**; the deal attracted **interest from** overseas investors; the consultant described the risk as **intergovernmental**; the minutes unexpectedly mentioned **intervention**; the new plan required us to **interweave** immediately. The board asked whether we should **invalidate**; the minutes unexpectedly mentioned **inventory**; the risk register added **investigation**; the revised plan sounded **invincible**.

#### 段落组 1（中文对照）
周四，法务部门登场，气氛骤然转冷。法务要求重新识别责任、启动二次审计，并把问题从技术与财务事故升级成合规与治理问题。

#### 段落组 2（English）
The minutes unexpectedly mentioned **irrigation**; legal raised an **issue with** the licensing terms; the minutes unexpectedly mentioned **jail**; the consultant described the risk as **judicial**; the risk register added **jury**. The revised plan sounded **kinetic**; a slide was mysteriously titled **labor law**; the new plan required us to **lament** immediately; the risk register added **landscape**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Someone raised **larceny** during the meeting; the risk register added **layoff**; the board asked whether we should **leak**; we signed a **lease on** a smaller office; the consultant described the risk as **legal**. One executive tried to **legislate** without approval; the board asked whether we should **levy**; the minutes unexpectedly mentioned **liberalization**; management decided to **liberalize** before lunch.

The emergency checklist included **life cycle**; the market suddenly seemed **lightweight**; the revised plan sounded **listless**; management decided to **litigate** before lunch; the bank approved a **loan for** working capital. The incident forced a new **long-term strategy**; the proposal looked **lucrative** at first; the board asked whether we should **maim**; the risk register added **majority**.

The board asked whether we should **malign**; the risk register added **malpractice**; the audit trail contained **management**; our lawyers suddenly cared about **manhunt**; one executive tried to **mar** without approval. Our lawyers suddenly cared about **market**; the ceo worried about losing **market share**; the agenda carried the phrase **mass production**; the minutes unexpectedly mentioned **measles**.

The minutes unexpectedly mentioned **medicaid**; the risk register added **medicare**; the consultant described the risk as **mellow**; the minutes unexpectedly mentioned **merchant**; everyone thought the **merger with** northstar was inevitable. Someone raised **message** during the meeting; our lawyers suddenly cared about **microscope**; the proposal exceeded the statutory **minimum wage**; our lawyers suddenly cared about **mishap**.

#### 段落组 2（中文对照）
中段不断出现保险、机构、国际投资、发票、孤立、司法与劳动等词汇，说明危机已经从内部会议扩散到制度、流程与外部关系层面。

#### 段落组 3（English）
The board called the situation **missing**; one executive tried to **mock** without approval; the risk register added **molecule**; the minutes unexpectedly mentioned **monarchy**; the revised plan sounded **monolithic**. The revised plan sounded **morbid**; the founder joked that his house **mortgage** felt safer than our shares; management decided to **mourn** before lunch; the board asked whether we should **multiply**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The risk register added **muscle**; the board called the situation **national**; the minutes unexpectedly mentioned **nationalism**; someone raised **nationalization** during the meeting; the emergency checklist included **natural selection**. One executive tried to **neglect** without approval; our lawyers suddenly cared about **neighborhood**; the board called the situation **neurotic**; the agenda carried the phrase **news flash**.

The risk register added **nostalgia**; the crisis forced us to **nurture**; the audit trail contained **nutrition**; management decided to **obfuscate** before lunch; the board called the situation **obscure**. The board asked whether we should **obsess**; the market suddenly seemed **obvious**; the crisis forced us to **occupy**; someone raised **office** during the meeting.

The risk register added **oligarchy**; the minutes unexpectedly mentioned **operator**; the market suddenly seemed **opposite**; the minutes unexpectedly mentioned **orbit**; procurement placed an **order for** replacement servers. The audit trail contained **organism**; the crisis forced us to **organize**; the final **outcome** depended on one email; the risk register added **output**.

One executive tried to **outweigh** without approval; the board asked whether we should **overcome**; the board asked whether we should **overdraw**; the crisis forced us to **overflow**; the risk register added **overpopulation**.

Legal then discovered the supposedly confidential contract had been attached to a public calendar invitation.

#### 段落组 3（中文对照）
到了后半，法务甚至发现原本应当保密的合同竟然被挂在公开日历邀请中。公司一边缩减办公空间、一边处理租约与责任，局面愈发像一出企业灾难喜剧。

---
## 5. Friday Morning: The Press Conference from Hell
![章节插图](./scene5_press_conference.png)
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[召开记者会] --> B[媒体追问失控] --> C[故障与PR双重爆炸]
```
### 中文导读
周五上午的记者会从一开始就注定翻车。场面里既有媒体追问，也有员工请愿、供应商预付款和延迟交付的罚则，所有压力一起涌向发言席。

### 分段中英对照
#### 段落组 1（English）
The press conference began badly and then discovered new ways to become worse.

The proposal looked **overt** at first; the crisis forced us to **overwhelm**; the audit trail contained **oxygen**; the board asked whether we should **pacify**; someone raised **pact** during the meeting. The proposal looked **palpable** at first; the revised plan sounded **paltry**; someone raised **panacea** during the meeting; our lawyers suddenly cared about **paparazzo**.

One executive tried to **paraphrase** without approval; the consultant described the risk as **patent**; someone raised **patronage** during the meeting; the vendor demanded **payment in advance**; the contract imposed a **penalty for** late delivery. Management decided to **penetrate** before lunch; the agenda carried the phrase **per capita**; the board reviewed **performance against** quarterly targets; the board asked whether we should **perpetrate**.

The risk register added **perspective**; the new plan required us to **peruse** immediately; employees signed a **petition against** the layoffs; the revised plan sounded **phony**; the minutes unexpectedly mentioned **pickpocket**. The proposal looked **pious** at first; our lawyers suddenly cared about **piracy**; one executive tried to **plagiarize** without approval; the board asked whether we should **plant**.

The emergency checklist included **plea bargain**; someone raised **pneumonia** during the meeting; one executive tried to **ponder** without approval; the consultant described the risk as **portly**; the consultant described the risk as **positive**. Management decided to **predominate** before lunch; the market suddenly seemed **pre-emptive**; our lawyers suddenly cared about **prejudice**; the crisis forced us to **preoccupy**.

#### 段落组 1（中文对照）
周五上午的记者会从一开始就注定翻车。场面里既有媒体追问，也有员工请愿、供应商预付款和延迟交付的罚则，所有压力一起涌向发言席。

#### 段落组 2（English）
The board asked whether we should **prescribe**; the proposal looked **present** at first; one executive tried to **preserve** without approval; the agenda carried the phrase **press release**; the new plan required us to **pretend** immediately. The consultant described the risk as **preventative**; the bank linked the loan to the **prime rate**; the board called the situation **principal**; the revised plan sounded **pristine**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The audit trail contained **probe**; management decided to **procrastinate** before lunch; the board asked whether we should **produce**; our lawyers suddenly cared about **productivity**; someone raised **profile** during the meeting. The new service finally **turned a profit**; policy would **prohibit employees from** using personal cloud drives; the proposal looked **prolific** at first; the board asked whether we should **promote**.

Our lawyers suddenly cared about **propaganda**; someone raised **property** during the meeting; the audit trail contained **proselyte**; someone raised **protectionism** during the meeting; one executive tried to **prove** without approval. The revised plan sounded **provincial**; our lawyers suddenly cared about **psychiatrist**; the risk register added **publicity**; the factory tightened **quality control**.

The crisis forced us to **quote**; the audit trail contained **radioactivity**; the audit trail contained **rage**; the risk register added **raise**; the new plan required us to **ratify** immediately. The new plan required us to **raze** immediately; the board asked whether we should **realize**; one executive tried to **recede** without approval; our lawyers suddenly cared about **recession**.

The minutes unexpectedly mentioned **reconciliation**; the board asked whether we should **recycle**; someone raised **reference** during the meeting; the crisis forced us to **reflect**; one executive tried to **refund** without approval. The new plan required us to **register** immediately; our lawyers suddenly cared about **regulator**; the board asked whether we should **reign**; one executive tried to **rekindle** without approval.

#### 段落组 2（中文对照）
中段，公司尝试从不同角度解释问题：阅读文件、签署请愿书、面对盗版、抄袭、公共立场与宣传表述。PR 想稳住局势，现实却不断失控。

#### 段落组 3（English）
A slide was mysteriously titled **reliable source**; the audit trail contained **relish**; we could no longer **rely on** a single supplier; the risk register added **remedy**; the new plan required us to **remove** immediately. The audit trail contained **renaissance**; the crisis forced us to **renovate**; the proposal looked **renowned** at first; the board asked whether we should **repent**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The auditor issued a **report on** the incident; our lawyers suddenly cared about **representative**; our lawyers suddenly cared about **reprieve**; the board asked whether we should **require**; the minutes unexpectedly mentioned **rescue**. The crisis forced us to **resign**; the revised plan sounded **resistant**; the coo was **responsible for** the recovery program; security began to **restrict access to** production systems.

The outage **resulted in** thousands of support tickets; the crisis forced us to **resurrect**; the pilot launched in the **retail** market; the crisis forced us to **retaliate**; the crisis forced us to **retire**. Management decided to **retrieve** before lunch; the minutes unexpectedly mentioned **review**; the risk register added **revolution**; one executive tried to **rip** without approval.

Our lawyers suddenly cared about **robotics**; the minutes unexpectedly mentioned **routine**; the audit trail contained **sabotage**; the market suddenly seemed **sacrilegious**; our lawyers suddenly cared about **salesman**. The risk register added **sampling**; the market suddenly seemed **sanitary**; one executive tried to **saturate** without approval; the audit trail contained **scare**.

The risk register added **score**; the crisis forced us to **seclude**; the emergency checklist included **security system**; the minutes unexpectedly mentioned **seismograph**; the minutes unexpectedly mentioned **seizure**.

The “leaked” memo was genuine, but the scandalous paragraph was an autocorrect error. Public relations did not consider this comforting.

#### 段落组 3（中文对照）
本节后半，审计员提交事件报告，安保限制生产系统访问，故障引发海量工单。形式上像是在发布会，实际效果更像是把危机用麦克风现场直播。

---
## 6. Friday Afternoon: The Market Bites Back
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[股价下跌] --> B[国际与工会层面扩散] --> C[神秘买家真相浮现]
```
### 中文导读
记者会过后，市场立刻用股价表达不满。市场份额下滑，模拟与危机应对并行，律师、公关和分析人员继续给局势贴上越来越离奇的标签。

### 分段中英对照
#### 段落组 1（English）
By noon the stock chart looked like a ski slope designed by a pessimist.

One executive tried to **serve** without approval; the risk register added **sewage**; our **share of** the regional market slipped; the crisis forced us to **shatter**; our lawyers suddenly cared about **shoot**. One executive tried to **shrink** without approval; the agenda carried the phrase **side effect**; the new plan required us to **simulate** immediately; the risk register added **simulator**.

The proposal looked **skeptical** at first; the audit trail contained **skin**; the board called the situation **slight**; the audit trail contained **slump**; the new plan required us to **snap** immediately. Our lawyers suddenly cared about **socialism**; our lawyers suddenly cared about **sociologist**; someone raised **soil** during the meeting; a slide was mysteriously titled **sole proprietor**.

The emergency checklist included **sound system**; our lawyers suddenly cared about **spacecraft**; one executive tried to **specialize** without approval; our lawyers suddenly cared about **spectacle**; one executive tried to **speculate** without approval. The risk register added **spillover**; the emergency checklist included **spin doctor**; one executive tried to **spoil** without approval; the audit trail contained **sport**.

Someone raised **square** during the meeting; the risk register added **stack**; someone raised **stall** during the meeting; the consultant described the risk as **state-run**; the market suddenly seemed **statutory**. The crisis forced us to **stimulate**; the board asked whether we should **stir**; the audit trail contained **stomach**; management decided to **strangle** before lunch.

#### 段落组 1（中文对照）
记者会过后，市场立刻用股价表达不满。市场份额下滑，模拟与危机应对并行，律师、公关和分析人员继续给局势贴上越来越离奇的标签。

#### 段落组 2（English）
Someone raised **strategy** during the meeting; the crisis forced us to **strengthen**; someone raised **strip** during the meeting; the board asked whether we should **stun**; the board asked whether we should **submit**. The new plan required us to **subside** immediately; the overseas **subsidiary** denied involvement; the proposal looked **substantial** at first; the board called the situation **sufficient**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The risk register added **supermarket**; the risk register added **supplier**; the audit trail contained **suppression**; the risk register added **surge**; the risk register added **surgery**. The minutes unexpectedly mentioned **survey**; one executive tried to **survive** without approval; the audit trail contained **suspect**; the revised plan sounded **suspicious**.

Our lawyers suddenly cared about **sway**; the audit trail contained **symbiosis**; the audit trail contained **symptom**; the minutes unexpectedly mentioned **tablet**; the risk register added **tangle**. The audit trail contained **tarnish**; finance discovered a **tax on** imported hardware; a slide was mysteriously titled **technology art**; our lawyers suddenly cared about **telescope**.

Management decided to **tend** before lunch; the new plan required us to **terminate** immediately; the market suddenly seemed **theatrical**; the audit trail contained **therapy**; the minutes unexpectedly mentioned **thrift**. Someone raised **throng** during the meeting; someone raised **tone** during the meeting; the audit trail contained **toss**; one executive tried to **tout** without approval.

The partners agreed to **trade with** one another directly; the prototype vanished during a **trade fair**; the **trade union** requested formal talks; the new plan required us to **transact** immediately; our lawyers suddenly cared about **transfusion**. Our lawyers suddenly cared about **translation**; the risk register added **trash**; one executive tried to **traverse** without approval; the risk register added **trek**.

#### 段落组 2（中文对照）
中段把镜头拉到国际业务、贸易与工会层面：海外子公司否认参与，贸易伙伴、展会与工会都被卷入，企业风险开始具备真正的外部后果。

#### 段落组 3（English）
Someone raised **trend** during the meeting; a slide was mysteriously titled **tropical rainforest**; the audit trail contained **truism**; the minutes unexpectedly mentioned **tumor**; the market suddenly seemed **turbid**. Someone raised **turbulence** during the meeting; staff **turnover** rose after the reorganization; the market suddenly seemed **ubiquitous**; the emergency checklist included **ultraviolet rays**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The crisis forced us to **uncover**; one executive tried to **undermine** without approval; the crisis forced us to **undertake**; the new plan required us to **unearth** immediately; the new plan required us to **unify** immediately. The proposal looked **unofficial** at first; the market suddenly seemed **untenable**; the new plan required us to **update** immediately; the new plan required us to **uproot** immediately.

The minutes unexpectedly mentioned **urge**; management decided to **vaccinate** before lunch; one executive tried to **vacillate** without approval; the board called the situation **vain**; the market suddenly seemed **vapid**. The risk register added **vector**; the minutes unexpectedly mentioned **vein**; the revised plan sounded **vertical**; the market suddenly seemed **vicious**.

Someone raised **vigor** during the meeting; the crisis forced us to **vindicate**; the market suddenly seemed **virtual**; the revised plan sounded **vital**; someone raised **void** during the meeting. The audit trail contained **volume**; the revised plan sounded **vulnerable**; the union demanded a higher hourly **wage**; one executive tried to **wallow** without approval.

The revised plan sounded **wanton**; the minutes unexpectedly mentioned **wax**; the market suddenly seemed **weary**; the proposal looked **wedded** at first; the new plan required us to **whisk** immediately.

A mysterious buyer supported the stock. The buyer turned out to be the company pension fund following an outdated algorithm.

#### 段落组 3（中文对照）
本节最后，股价背后那位“神秘买家”也被揭晓——并不是什么救市英雄，而是公司养老金基金在执行一个过时算法。危机依旧荒诞得相当稳定。

---
## 7. Saturday: The Rescue Team That Wasn’t
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[周末救火] --> B[各处打补丁] --> C[热线竟转给退休销售]
```
### 中文导读
周六，公司成立了一个人人都不是自愿加入的救火小组。广泛的问题、见证人、工作狂和学术化词汇同时出现，说明这已不只是业务事故，而是系统性混乱。

### 分段中英对照
#### 段落组 1（English）
A weekend task force assembled. Nobody had volunteered; everyone had somehow “been volunteered.”

The proposal looked **widespread** at first; someone raised **witness** during the meeting; the risk register added **workaholic**; management decided to **wreak** before lunch; the minutes unexpectedly mentioned **zenith**. Management decided to **abbreviate** before lunch; the risk register added **abortion**; the crisis forced us to **abstract**; the proposal looked **academic** at first.

The consultant described the risk as **acceptable**; the board called the situation **accidental**; the crisis forced us to **accomplish**; the board called the situation **accountable**; the audit trail contained **accounting**. The emergency checklist included **acid rain**; the minutes unexpectedly mentioned **adaptation**; the consultant described the risk as **additional**; the crisis forced us to **adjust**.

The audit trail contained **admission**; the board asked whether we should **adopt**; someone raised **advantage** during the meeting; the crisis forced us to **advertise**; the new plan required us to **advocate** immediately. The new plan required us to **affect** immediately; management decided to **affiliate** before lunch; the crisis forced us to **afford**; someone raised **aftermath** during the meeting.

The minutes unexpectedly mentioned **agenda**; the new plan required us to **aggravate** immediately; the agenda carried the phrase **aging society**; someone raised **agriculture** during the meeting; the new plan required us to **alert** immediately. The team proceeded **allegedly**; one executive tried to **alleviate** without approval; one executive tried to **allude** without approval; the risk register added **altitude**.

#### 段落组 1（中文对照）
周六，公司成立了一个人人都不是自愿加入的救火小组。广泛的问题、见证人、工作狂和学术化词汇同时出现，说明这已不只是业务事故，而是系统性混乱。

#### 段落组 2（English）
The proposal looked **ambiguous** at first; our lawyers suddenly cared about **amenity**; the risk register added **analyst**; management decided to **anguish** before lunch; someone raised **anniversary** during the meeting. The team proceeded **anonymously**; the new plan required us to **anticipate** immediately; the minutes unexpectedly mentioned **anxiety**; the new plan required us to **apologize** immediately. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Management decided to **appall** before lunch; the board asked whether we should **appease**; the new plan required us to **appoint** immediately; one executive tried to **appreciate** without approval; the board asked whether we should **argue**. Management decided to **arrest** before lunch; our lawyers suddenly cared about **artifact**; someone raised **ascent** during the meeting; the minutes unexpectedly mentioned **assassin**.

One executive tried to **assault** without approval; a slide was mysteriously titled **assembly line**; the minutes unexpectedly mentioned **assessment**; one executive tried to **assign** without approval; the board asked whether we should **assuage**. The audit trail contained **astronaut**; the risk register added **atmosphere**; the audit trail contained **atrocity**; the crisis forced us to **attend**.

Our lawyers suddenly cared about **attitude**; the board asked whether we should **auction**; the new plan required us to **augment** immediately; the new plan required us to **authenticate** immediately; the market suddenly seemed **automatic**. The market suddenly seemed **average**; the audit trail contained **backlash**; our lawyers suddenly cared about **bacteria**; the board asked whether we should **balk**.

Someone raised **bandit** during the meeting; the crisis forced us to **banish**; the minutes unexpectedly mentioned **banking**; the board asked whether we should **bankrupt**; one executive tried to **bar** without approval. The crisis forced us to **barter**; the audit trail contained **bedrock**; the new plan required us to **beg** immediately; our lawyers suddenly cared about **behavior**.

#### 段落组 2（中文对照）
中段中，团队继续修修补补：修改方案、做宣传、拉联盟、谈后果，甚至出现匿名、以物易物和设立障碍等做法，显得既忙碌又无奈。

#### 段落组 3（English）
One executive tried to **bemuse** without approval; the board asked whether we should **benefit**; management decided to **bid** before lunch; one executive tried to **bill** without approval; the revised plan sounded **biochemical**. The risk register added **bionics**; the audit trail contained **biotechnology**; the board called the situation **bitter**; the board asked whether we should **blame**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The board asked whether we should **blemish**; the board asked whether we should **board**; the board asked whether we should **bomb**; the new plan required us to **bone** immediately; the board asked whether we should **boost**. The new plan required us to **bore** immediately; management decided to **bother** before lunch; the emergency checklist included **bottom line**; the agenda carried the phrase **bounced check**.

The proposal looked **bountiful** at first; the risk register added **brain**; the audit trail contained **breakthrough**; one executive tried to **breathe** without approval; the consultant described the risk as **brief**. The risk register added **bronchitis**; the market suddenly seemed **brutal**; the market suddenly seemed **bullish**; the market suddenly seemed **buoyant**.

The minutes unexpectedly mentioned **calamity**; the minutes unexpectedly mentioned **cancer**; someone raised **candidate** during the meeting; the risk register added **capacity**; the audit trail contained **capitalism**. The crisis forced us to **captivate**; the board asked whether we should **career**; the emergency checklist included **case history**; our lawyers suddenly cared about **casualty**.

Someone raised **catastrophe** during the meeting; one executive tried to **categorize** without approval; the new plan required us to **caution** immediately; our lawyers suddenly cared about **celebrity**; the board asked whether we should **censor**.

The rescue team discovered that the crisis hotline forwarded every call to a retired salesman in Osaka.

#### 段落组 3（中文对照）
本节最终揭露了又一个黑色幽默：所谓危机热线竟然会把所有来电转接给大阪一位已退休的销售员。公司越救火，越像在给喜剧续写新桥段。

---
## 8. Sunday: The Board Votes at 2 A.M.
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[凌晨投票] --> B[试图建立秩序] --> C[发现对方根本没批准]
```
### 中文导读
周日凌晨两点，董事会拖着疲惫身体投票。中央集权、混乱、清理、客户群、联盟和社区等词汇交织，反映出一群人试图在睡眠不足中制造秩序。

### 分段中英对照
#### 段落组 1（English）
At 2 a.m., the board discovered that democracy is easier when nobody has slept.

The audit trail contained **centralization**; the consultant described the risk as **chaotic**; the board asked whether we should **charge**; the board asked whether we should **charter**; one executive tried to **check** without approval. Someone raised **cholesterol** during the meeting; the board asked whether we should **chuck**; someone raised **circumference** during the meeting; the agenda carried the phrase **civil servant**.

Management decided to **clamor** before lunch; the crisis forced us to **clarify**; someone raised **cleanup** during the meeting; the minutes unexpectedly mentioned **clientele**; the new plan required us to **cling** immediately. The risk register added **coalition**; the crisis forced us to **cobble**; the crisis forced us to **code**; one executive tried to **collaborate** without approval.

Someone raised **colleague** during the meeting; our lawyers suddenly cared about **collusion**; the consultant described the risk as **comfortable**; the consultant described the risk as **commercial**; the board asked whether we should **commission**. The minutes unexpectedly mentioned **committee**; the board called the situation **commonplace**; someone raised **community** during the meeting; the crisis forced us to **compensate**.

Three suppliers continued to **compete for** the contract; the revised plan sounded **competitive**; the board called the situation **complex**; we had to **comply with** the regulator’s request; the revised plan sounded **comprehensive**. The proposal looked **concave** at first; the new plan required us to **concede** immediately; the crisis forced us to **conclude**; someone raised **concord** during the meeting.

#### 段落组 1（中文对照）
周日凌晨两点，董事会拖着疲惫身体投票。中央集权、混乱、清理、客户群、联盟和社区等词汇交织，反映出一群人试图在睡眠不足中制造秩序。

#### 段落组 2（English）
Management decided to **condole** before lunch; the minutes unexpectedly mentioned **conductor**; the new plan required us to **confer** immediately; the board asked whether we should **confide**; the board called the situation **confidential**. One executive tried to **confuse** without approval; management decided to **conglomerate** before lunch; management decided to **conjure** before lunch; the consultant described the risk as **conscious**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Someone raised **consensus** during the meeting; the audit trail contained **conservation**; one executive tried to **consist** without approval; the audit trail contained **constellation**; the board asked whether we should **constitute**. The crisis forced us to **consult**; the minutes unexpectedly mentioned **consumer**; someone raised **consumption** during the meeting; the market suddenly seemed **contemporary**.

The proposal looked **contentious** at first; management decided to **contract** before lunch; one executive tried to **contrast** without approval; the audit trail contained **contribution**; the minutes unexpectedly mentioned **controversy**. The consultant described the risk as **convenient**; management decided to **convict** before lunch; the crisis forced us to **convince**; the board called the situation **copyright**.

The new plan required us to **corner** immediately; the scandal threatened **corporate profit**; the board asked whether we should **correct**; management decided to **corrode** before lunch; salary talks returned to the rising **cost of living**. The board called the situation **costly**; management decided to **countenance** before lunch; our lawyers suddenly cared about **courtesy**; the audit trail contained **crackdown**.

The new plan required us to **crash** immediately; the new plan required us to **create** immediately; the new plan required us to **credit** immediately; the board called the situation **criminal**; the new plan required us to **cringe** immediately. The audit trail contained **critic**; one executive tried to **criticize** without approval; one executive tried to **crowd** without approval; the board asked whether we should **crush**.

#### 段落组 2（中文对照）
中段进一步扩展到竞争、合规、利润、生活成本和批评声。董事会、委员会与社区语境同时出现，说明公司已经把一场并购硬生生开成了一场社会学实验。

#### 段落组 3（English）
The consultant described the risk as **cumulative**; the audit trail contained **currency**; the revised plan sounded **customary**; the emergency checklist included **cutting edge**; the consultant described the risk as **dairy**. The minutes unexpectedly mentioned **darwinism**; the client moved the **deadline** forward by two days; our lawyers suddenly cared about **dealer**; management decided to **debit** before lunch. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The crisis forced us to **decimate**; the crisis forced us to **decline**; the board asked whether we should **deduct**; the proposal looked **deep** at first; the crisis forced us to **defect**. The crisis forced us to **defer**; the crisis forced us to **define**; our lawyers suddenly cared about **defoliant**; management decided to **defy** before lunch.

The crisis forced us to **deliberate**; management decided to **delude** before lunch; one executive tried to **demarcate** without approval; one executive tried to **demolish** without approval; our lawyers suddenly cared about **density**. One executive tried to **deny** without approval; the revised plan sounded **dependent**; management decided to **deplete** before lunch; the risk register added **depositor**.

Someone raised **deregulation** during the meeting; the board asked whether we should **derive**; one executive tried to **describe** without approval; management decided to **deserve** before lunch; the crisis forced us to **detain**. A slide was mysteriously titled **detective**; the new plan required us to **deter** immediately; the crisis forced us to **devalue**; the audit trail contained **diabetes**.

The minutes unexpectedly mentioned **diarrhea**; our lawyers suddenly cared about **dietitian**; the crisis forced us to **digest**; the risk register added **dilemma**; someone raised **dioxin** during the meeting.

The board approved the merger—then learned Northstar had never approved it on its side.

#### 段落组 3（中文对照）
而最讽刺的反转在本节末尾出现：董事会明明已经批准并购，却随后得知 Northstar 那边根本没批准。所有深夜投票瞬间变得像白忙一场。

---
## 9. Monday Again: The Competitor Makes an Offer
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[对手报价] --> B[怀疑其真实意图] --> C[只是想租数据中心]
```
### 中文导读
新的一周开始，竞争对手 Northstar 抛出了一份“过于慷慨”的报价。折扣、疾病、阴郁、下行与生态友好等词汇同时出现，像是在提醒大家：好消息未必真是好消息。

### 分段中英对照
#### 段落组 1（English）
Northstar made an offer so generous that everyone immediately became suspicious.

The crisis forced us to **direct**; the minutes unexpectedly mentioned **disaster**; management decided to **disband** before lunch; the crisis forced us to **discharge**; the board asked whether we should **disclose**. Sales offered a **discount on** annual subscriptions; our lawyers suddenly cared about **disease**; the consultant described the risk as **dismal**; the board asked whether we should **disparage**.

One executive tried to **dissatisfy** without approval; management decided to **distract** before lunch; the audit trail contained **distribution**; the board asked whether we should **diverge**; one executive tried to **divert** without approval. The revised plan sounded **divine**; the new plan required us to **dominate** immediately; our lawyers suddenly cared about **dormancy**; one executive tried to **dose** without approval.

One executive tried to **download** without approval; the minutes unexpectedly mentioned **downturn**; our lawyers suddenly cared about **drainage**; management decided to **drug** before lunch; the invoice was **due** on friday. The audit trail contained **dumping**; the revised plan sounded **eager**; our lawyers suddenly cared about **eclipse**; the revised plan sounded **eco-friendly**.

The minutes unexpectedly mentioned **economist**; the minutes unexpectedly mentioned **ecosystem**; the board called the situation **editorial**; our lawyers suddenly cared about **edutainment**; the new plan required us to **electrify** immediately. The minutes unexpectedly mentioned **elite**; the board asked whether we should **embargo**; our lawyers suddenly cared about **embezzlement**; management decided to **emerge** before lunch.

#### 段落组 1（中文对照）
新的一周开始，竞争对手 Northstar 抛出了一份“过于慷慨”的报价。折扣、疾病、阴郁、下行与生态友好等词汇同时出现，像是在提醒大家：好消息未必真是好消息。

#### 段落组 2（English）
The crisis forced us to **employ**; the audit trail contained **employment**; the new plan required us to **endanger** immediately; the market suddenly seemed **endemic**; the board asked whether we should **energize**. The risk register added **enforcement**; the new plan required us to **enrapture** immediately; the audit trail contained **enterprise**; one executive tried to **entice** without approval. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Management decided to **entreat** before lunch; the market suddenly seemed **environmental**; a slide was mysteriously titled **environmental management**; the market suddenly seemed **epidemic**; someone raised **equilibrium** during the meeting. The revised plan sounded **equivalent**; management decided to **escape** before lunch; the crisis forced us to **establish**; the revised plan sounded **ethnic**.

The audit trail contained **euthanasia**; the audit trail contained **evidence**; the board asked whether we should **examine**; one executive tried to **exchange** without approval; the consultant described the risk as **exclusive**. Management decided to **exhaust** before lunch; one executive tried to **expand** without approval; management decided to **expel** before lunch; someone raised **experiment** during the meeting.

The board asked whether we should **explain**; someone raised **exploitation** during the meeting; the minutes unexpectedly mentioned **export**; one executive tried to **exterminate** without approval; the new plan required us to **extradite** immediately. The proposal looked **extravagant** at first; our lawyers suddenly cared about **eyesight**; one executive tried to **fabricate** without approval; a slide was mysteriously titled **fair practice**.

The minutes unexpectedly mentioned **famine**; the risk register added **fascist**; our lawyers suddenly cared about **fault**; someone raised **feminist** during the meeting; the new plan required us to **fetch** immediately. The audit trail contained **figure**; the audit trail contained **finance**; management decided to **fire** before lunch; the agenda carried the phrase **fishery zone**.

#### 段落组 2（中文对照）
中段中，大家继续在分流、主导、剂量、下载、到期账单和估值变化之间穿梭。市场、策略与技术的边界越来越模糊。

#### 段落组 3（English）
The board asked whether we should **fleece**; our lawyers suddenly cared about **flood**; the crisis forced us to **flounder**; someone raised **flu** during the meeting; one executive tried to **foist** without approval. One executive tried to **force** without approval; management decided to **foresee** before lunch; the proposal looked **former** at first; the consultant described the risk as **forthcoming**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The agenda carried the phrase **fossil fuel**; the risk register added **founder**; someone raised **franchise** during the meeting; the emergency checklist included **free trade**; the minutes unexpectedly mentioned **fringe**. The consultant described the risk as **fugitive**; one executive tried to **furnish** without approval; management decided to **gain** before lunch; the crisis forced us to **gape**.

Management decided to **garnish** before lunch; the audit trail contained **gene**; management decided to **generate** before lunch; the risk register added **genetics**; the audit trail contained **germ**. The revised plan sounded **global**; the new plan required us to **glower** immediately; the revised plan sounded **gory**; one executive tried to **govern** without approval.

The market suddenly seemed **green**; the audit trail contained **grievance**; the board called the situation **gross**; one executive tried to **grudge** without approval; the consultant described the risk as **gullible**. The risk register added **habitat**; the audit trail contained **headline**; the risk register added **hearing**; the consultant described the risk as **hedonistic**.

Our lawyers suddenly cared about **heritage**; the emergency checklist included **high-tech system**; the crisis forced us to **hire**; the agenda carried the phrase **holding company**; someone raised **homosexual** during the meeting.

Northstar’s offer was not to buy Helix. It wanted to rent Helix’s empty data center for a gaming tournament.

#### 段落组 3（中文对照）
最终反转揭晓：Northstar 的报价根本不是为了收购 Helix，而只是想租用 Helix 空着的数据中心来办一场游戏比赛。并购戏码进一步滑向荒诞。

---
## 10. The First Twist: The Hacker Is on Payroll
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[追查黑客] --> B[线索指向内部] --> C[CEO 演示账号背锅]
```
### 中文导读
第一重反转出现：日志追到的“黑客”可能就在工资单上。嫌疑人一路从内部人员转到实习生，再转到咖啡机，整个调查像一场越开越歪的推理会。

### 分段中英对照
#### 段落组 1（English）
The logs pointed to an insider. The insider pointed to an intern. The intern pointed to the coffee machine.

The market suddenly seemed **hopeless**; someone raised **hormone** during the meeting; our lawyers suddenly cared about **hostage**; a slide was mysteriously titled **housing complex**; management decided to **humanize** before lunch. Someone raised **hybrid** during the meeting; the revised plan sounded **hypocritical**; our lawyers suddenly cared about **identification**; our lawyers suddenly cared about **imbalance**.

The market suddenly seemed **imminent**; the crisis forced us to **impair**; one executive tried to **implant** without approval; the consultant described the risk as **impregnable**; one executive tried to **incite** without approval. The board asked whether we should **incorporate**; the market reacted **independently**; our lawyers suddenly cared about **indication**; the consultant described the risk as **indigent**.

The audit trail contained **inertia**; one executive tried to **infect** without approval; a slide was mysteriously titled **information technology**; the risk register added **infrastructure**; the risk register added **ingredient**. The new plan required us to **inhibit** immediately; one executive tried to **initiate** without approval; the risk register added **innuendo**; one executive tried to **insinuate** without approval.

The proposal looked **insoluble** at first; the board asked whether we should **inspire**; one executive tried to **insulate** without approval; one executive tried to **insure** without approval; one executive tried to **intend** without approval. The risk register added **interdependence**; a higher **interest rate** changed the valuation; the audit trail contained **interrogation**; the minutes unexpectedly mentioned **interview**.

#### 段落组 1（中文对照）
第一重反转出现：日志追到的“黑客”可能就在工资单上。嫌疑人一路从内部人员转到实习生，再转到咖啡机，整个调查像一场越开越歪的推理会。

#### 段落组 2（English）
The board called the situation **intrinsic**; the team proceeded **invariably**; the fund decided to **invest in** our competitor instead; the board called it a long-term **investment in** resilience; our lawyers suddenly cared about **involvement**. The board asked whether we should **irritate**; the minutes unexpectedly mentioned **journal**; the audit trail contained **jurisdiction**; management decided to **justify** before lunch. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

Our lawyers suddenly cared about **know-how**; one executive tried to **lack** without approval; the minutes unexpectedly mentioned **landmark**; the crisis forced us to **languish**; one executive tried to **launder** without approval. The board called the situation **leading**; management decided to **lean** before lunch; the audit trail contained **legacy**; the revised plan sounded **legendary**.

The revised plan sounded **legitimate**; the consultant described the risk as **liable**; the audit trail contained **liberation**; the emergency checklist included **life expectancy**; management decided to **liquidate** before lunch. The revised plan sounded **literary**; the emergency checklist included **litmus test**; the emergency checklist included **local edition**; the audit trail contained **lung**.

Someone raised **mainstream** during the meeting; the audit trail contained **malady**; our lawyers suddenly cared about **malnutrition**; management decided to **manage** before lunch; our lawyers suddenly cared about **mandate**. Management decided to **manufacture** before lunch; the risk register added **margin**; the emergency checklist included **market research**; the emergency checklist included **mass media**.

Someone raised **matter** during the meeting; the agenda carried the phrase **media psychology**; the proposal looked **medical** at first; the audit trail contained **medicine**; the minutes unexpectedly mentioned **merchandise**. Management decided to **merge** before lunch; one executive tried to **merit** without approval; the risk register added **meteor**; someone raised **mineral** during the meeting.

#### 段落组 2（中文对照）
中段聚焦 IT、基础设施、暗示与检查，表明问题正在从“外部攻击”转为“内部系统与账号管理”失控。管理层对各种指标、利率与估值继续做出仓促反应。

#### 段落组 3（English）
Management decided to **mire** before lunch; management decided to **mislead** before lunch; the board asked whether we should **mitigate**; the minutes unexpectedly mentioned **mogul**; the board asked whether we should **mollify**. The board asked whether we should **monitor**; someone raised **monopoly** during the meeting; the market suddenly seemed **moribund**; the risk register added **motive**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The board called the situation **multinational**; the consultant described the risk as **municipal**; one executive tried to **mystify** without approval; the emergency checklist included **national interest**; the risk register added **nationality**. The risk register added **naturalist**; the risk register added **nature**; the minutes unexpectedly mentioned **negotiation**; the consultant described the risk as **nervous**.

A slide was mysteriously titled **news conference**; our lawyers suddenly cared about **nomination**; the crisis forced us to **notify**; the audit trail contained **nutrient**; our lawyers suddenly cared about **obesity**. The board called the situation **obnoxious**; the crisis forced us to **observe**; one executive tried to **obstruct** without approval; someone raised **occupation** during the meeting.

The audit trail contained **offer**; the board asked whether we should **offset**; the minutes unexpectedly mentioned **operation**; one executive tried to **oppose** without approval; the revised plan sounded **optional**. The new plan required us to **ordain** immediately; the risk register added **organ**; the minutes unexpectedly mentioned **organization**; the audit trail contained **outbreak**.

The board asked whether we should **outlive**; our lawyers suddenly cared about **outrage**; the revised plan sounded **overcast**; the audit trail contained **overdose**; the board asked whether we should **overextend**.

The “hacker” credentials belonged to the CEO’s demo account, whose password was, regrettably, demo1234.

#### 段落组 3（中文对照）
本节最后揭示了核心笑点：所谓黑客凭证，实际上来自 CEO 的演示账号，而那个密码居然是 demo1234。整个安全危机突然变成了密码管理教育片。

---
## 11. The Second Twist: The Payroll Is Fake
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[核查工资单] --> B[发现虚构高管部门] --> C[体系造假浮出水面]
```
### 中文导读
第二重反转更离谱：不是工资单里有坏人，而是工资单本身就是假的。不存在的高管、部门和真实报销账户共同构成了制度层面的幽灵结构。

### 分段中英对照
#### 段落组 1（English）
Payroll records showed three executives who did not exist, two departments that did not exist, and one very real expense account.

The market reacted **overly**; the board asked whether we should **overpower**; the risk register added **overtime**; the audit trail contained **oxidation**; a slide was mysteriously titled **ozone layer**. Management decided to **pack** before lunch; the crisis forced us to **palliate**; one executive tried to **palpitate** without approval; the new plan required us to **pamper** immediately.

Someone raised **panic** during the meeting; the consultant described the risk as **par**; someone raised **partnership** during the meeting; the revised plan sounded **patient**; the proposal looked **payable** at first. The market suddenly seemed **pedantic**; the revised plan sounded **pending**; the proposal looked **penurious** at first; our lawyers suddenly cared about **percentage**.

The minutes unexpectedly mentioned **periodical**; our lawyers suddenly cared about **personnel**; one executive tried to **perturb** without approval; the board asked whether we should **pervade**; the risk register added **petroleum**. The consultant described the risk as **physical**; someone raised **pill** during the meeting; the board called the situation **piquant**; the board called the situation **pivotal**.

The new plan required us to **plague** immediately; someone raised **platform** during the meeting; the risk register added **plebiscite**; the minutes unexpectedly mentioned **pollution**; the emergency checklist included **population explosion**. Management decided to **portray** before lunch; someone raised **potential** during the meeting; the audit trail contained **precaution**; the proposal looked **pregnant** at first.

#### 段落组 1（中文对照）
第二重反转更离谱：不是工资单里有坏人，而是工资单本身就是假的。不存在的高管、部门和真实报销账户共同构成了制度层面的幽灵结构。

#### 段落组 2（English）
The consultant described the risk as **premature**; the board asked whether we should **prepare**; the risk register added **prescription**; the proposal looked **presentable** at first; a slide was mysteriously titled **presidential election**. The board asked whether we should **presume**; one executive tried to **prevent** without approval; the board called the situation **primary**; the board called the situation **primitive**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The board called the situation **prior**; our lawyers suddenly cared about **privacy**; the board asked whether we should **proclaim**; the new plan required us to **procure** immediately; our lawyers suddenly cared about **product**. The revised plan sounded **professional**; the board called the situation **profitable**; someone raised **project** during the meeting; the market suddenly seemed **prominent**.

Someone raised **promotion** during the meeting; the board asked whether we should **propagate**; management decided to **prosecute** before lunch; the audit trail contained **protein**; management decided to **provide** before lunch. The risk register added **proxy**; the agenda carried the phrase **public relations**; one executive tried to **purchase** without approval; our lawyers suddenly cared about **quota**.

The revised plan sounded **radical**; the minutes unexpectedly mentioned **radiologist**; the audit trail contained **raid**; the minutes unexpectedly mentioned **ratification**; the board asked whether we should **rationalize**. The emergency checklist included **real estate**; management decided to **recall** before lunch; the market suddenly seemed **receivable**; the board asked whether we should **recognize**.

The board asked whether we should **recuperate**; the new plan required us to **reduce** immediately; the audit trail contained **referendum**; the board asked whether we should **reform**; management decided to **refute** before lunch. The risk register added **regulation**; one executive tried to **rehabilitate** without approval; the minutes unexpectedly mentioned **reimbursement**; the new plan required us to **relapse** immediately.

#### 段落组 2（中文对照）
中段继续扩展到呈现、选举、优先级、项目、公关、采购和配额等内容，说明问题已经深入组织架构和运营流程。

#### 段落组 3（English）
The new plan required us to **relieve** immediately; the revised plan sounded **reluctant**; the new plan required us to **remain** immediately; the crisis forced us to **remind**; the minutes unexpectedly mentioned **remuneration**. The audit trail contained **renewal**; someone raised **renovation** during the meeting; the audit trail contained **rental**; management decided to **replace** before lunch. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The crisis forced us to **represent**; the proposal looked **repressive** at first; the minutes unexpectedly mentioned **reputation**; the board asked whether we should **rescind**; the audit trail contained **reserve**. Management decided to **resist** before lunch; the minutes unexpectedly mentioned **resource**; the crisis forced us to **restore**; our lawyers suddenly cared about **restriction**.

The risk register added **resume**; one executive tried to **resuscitate** without approval; the audit trail contained **retainer**; someone raised **retaliation** during the meeting; our lawyers suddenly cared about **retreat**. The audit trail contained **revenue**; the new plan required us to **revile** immediately; the risk register added **rhetoric**; the audit trail contained **risk**.

The proposal looked **rocky** at first; the audit trail contained **ruin**; our lawyers suddenly cared about **sacrifice**; the audit trail contained **salary**; someone raised **sample** during the meeting. The minutes unexpectedly mentioned **sanction**; someone raised **satellite** during the meeting; the risk register added **saving**; the audit trail contained **scoop**.

One executive tried to **scrutinize** without approval; the board called the situation **secure**; the board asked whether we should **seek**; management decided to **seize** before lunch; someone raised **senior** during the meeting.

The ghost employees were test records from an HR migration. Their “salaries” were simulation data, except one payment that was very real.

#### 段落组 3（中文对照）
本节后半围绕监管、报销、改革、复发与替换收束，Leo 继续认真做笔记。公司越来越接近真相，但也越来越难面对自己体系的荒谬。

---
## 12. The Final Twist: The Janitor Owns the Company
![章节插图](./scene12_janitor_reveal.png)
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[佐藤先生发声] --> B[出示 51% 股份] --> C[解释真实身份]
```
### 中文导读
终极反转到来：清洁工佐藤先生拿出了 51% 投票权的股份证明，整个会议室瞬间沉默。此前争得面红耳赤的高管们，这时终于发现真正的控制者一直很低调。

### 分段中英对照
#### 段落组 1（English）
The janitor, Mr. Sato, cleared his throat and produced 51 percent of the voting shares. The room became educationally silent.

The new plan required us to **settle** immediately; someone raised **sexism** during the meeting; the minutes unexpectedly mentioned **shareholder**; the audit trail contained **shipment**; someone raised **showdown** during the meeting. The risk register added **shrug**; the minutes unexpectedly mentioned **sidekick**; the audit trail contained **skeleton**; the proposal looked **skillful** at first.

The risk register added **skull**; the consultant described the risk as **sluggish**; management decided to **smolder** before lunch; management decided to **soar** before lunch; the board asked whether we should **socialize**. The risk register added **software**; the board called the situation **solar**; our lawyers suddenly cared about **sort**; the risk register added **source**.

The minutes unexpectedly mentioned **spearhead**; our lawyers suddenly cared about **species**; the board called the situation **spectacular**; our lawyers suddenly cared about **spell**; the board called the situation **spiritual**. The risk register added **sponsor**; someone raised **sprain** during the meeting; the crisis forced us to **stabilize**; our lawyers suddenly cared about **stalemate**.

Management decided to **stampede** before lunch; someone raised **status** during the meeting; the risk register added **stick**; the risk register added **stock**; our lawyers suddenly cared about **storm**. Someone raised **string** during the meeting; the board called the situation **stultifying**; the minutes unexpectedly mentioned **subcontractor**; management decided to **subpoena** before lunch.

#### 段落组 1（中文对照）
终极反转到来：清洁工佐藤先生拿出了 51% 投票权的股份证明，整个会议室瞬间沉默。此前争得面红耳赤的高管们，这时终于发现真正的控制者一直很低调。

#### 段落组 2（English）
The risk register added **subsidence**; the minutes unexpectedly mentioned **subsidy**; the board asked whether we should **suffer**; the risk register added **suicide**; the new plan required us to **supervise** immediately. The board asked whether we should **suppress**; the minutes unexpectedly mentioned **surcharge**; the risk register added **surgeon**; someone raised **surplus** during the meeting. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The minutes unexpectedly mentioned **surroundings**; the risk register added **survival**; one executive tried to **suspend** without approval; the new plan required us to **sustain** immediately; management decided to **swear** before lunch. Management decided to **sympathize** before lunch; the audit trail contained **syndicate**; the audit trail contained **tabloid**; someone raised **tariff** during the meeting.

The new plan required us to **tarry** immediately; our lawyers suddenly cared about **tear**; the minutes unexpectedly mentioned **telecommunication**; the audit trail contained **temperance**; the consultant described the risk as **tendentious**. The crisis forced us to **testify**; our lawyers suddenly cared about **theory**; management decided to **threaten** before lunch; our lawyers suddenly cared about **throat**.

The revised plan sounded **tolerant**; one executive tried to **topple** without approval; the proposal looked **totalitarian** at first; the agenda carried the phrase **towering debt**; a slide was mysteriously titled **trade balance**. A slide was mysteriously titled **trade press**; the audit trail contained **trademark**; management decided to **transfer** before lunch; one executive tried to **translate** without approval.

The audit trail contained **transplant**; the minutes unexpectedly mentioned **trauma**; the minutes unexpectedly mentioned **treatment**; the revised plan sounded **tremulous**; our lawyers suddenly cared about **trigger**. The board called the situation **truculent**; the minutes unexpectedly mentioned **trump**; the risk register added **tune**; someone raised **turbine** during the meeting.

#### 段落组 2（中文对照）
中段中，风险、供应、补贴、监督、工会环境和债务等词汇继续出现，像是在烘托公司终于不得不面对现实。危机中的所有制度词汇此时都有了更讽刺的味道。

#### 段落组 3（English）
Our lawyers suddenly cared about **turn**; our lawyers suddenly cared about **tyranny**; our lawyers suddenly cared about **ulcer**; the revised plan sounded **unanimous**; one executive tried to **undercut** without approval. Our lawyers suddenly cared about **understatement**; the new plan required us to **undulate** immediately; someone raised **unemployment** during the meeting; the audit trail contained **union**. Leo wrote all of this down, then asked whether “stakeholder alignment” was a medical condition.

The consultant described the risk as **unprecedented**; the new plan required us to **upbraid** immediately; a slide was mysteriously titled **upper class**; the agenda carried the phrase **urban renewal**; the minutes unexpectedly mentioned **utopia**. Our lawyers suddenly cared about **vaccination**; the risk register added **vacuum**; the audit trail contained **value**; the audit trail contained **vapor**.

The spokesperson replied **vehemently**; the audit trail contained **venture**; the board asked whether we should **vibrate**; the audit trail contained **victim**; one executive tried to **vilify** without approval. One executive tried to **violate** without approval; the minutes unexpectedly mentioned **virus**; the revised plan sounded **vivacious**; the audit trail contained **voltage**.

Someone raised **volunteer** during the meeting; the board asked whether we should **wade**; someone raised **walkout** during the meeting; the crisis forced us to **wane**; the audit trail contained **waste**. The minutes unexpectedly mentioned **wear**; the minutes unexpectedly mentioned **weather**; the minutes unexpectedly mentioned **welfare**; the minutes unexpectedly mentioned **wholesale**.

A slide was mysteriously titled **wind tunnel**; the company promised to retrain the **workforce**; the proposal looked **worldly** at first; the revised plan sounded **zealous**.

Mr. Sato explained that he was the founder’s first investor. He had taken the janitor job because, unlike board meetings, cleaning produced visible results.

#### 段落组 3（中文对照）
结尾处，发言人强烈回应，佐藤先生说明自己其实是创始人的第一位投资人，而他之所以愿意当清洁工，是因为打扫卫生至少比董事会更容易看到成果。

---
## Epilogue
### 本章小流程图
```mermaid
%%{init: {'theme': 'base'}}%%
flowchart LR
    A[并购取消] --> B[公司幸存] --> C[留下治理教训]
```
### 中文导读
尾声里，并购取消、原型找回、监管文件更正、员工保住工作，而 Leo 因为问出了“有没有人验证最初前提”这一关键问题而升职。

### 分段中英对照
#### 段落 1（English）
The merger was cancelled, the prototype was recovered, the regulator received a corrected filing, the employees kept their jobs, and Leo was promoted for asking the only question nobody else had asked: “Did anyone actually verify the premise?” Mr. Sato remained janitor and controlling shareholder. His first governance reform was simple: every executive memo had to fit on one page, and every password had to contain something more imaginative than the company name.

#### 段落 1（中文）
尾声里，并购取消、原型找回、监管文件更正、员工保住工作，而 Leo 因为问出了“有没有人验证最初前提”这一关键问题而升职。

#### 段落 2（English）
Helix Meridian survived. More surprisingly, it learned. For almost three weeks.

#### 段落 2（中文）
佐藤先生继续兼任清洁工和控股股东，并推动公司治理改革；Helix Meridian 虽然幸存下来，也似乎学到了点什么，只是这份觉悟维持得并不算久。

---
## 使用建议

### 适合怎么背

1. 先看 **时间线图**，把整篇剧情顺下来。
2. 再看 **人物关系图**，明确 CEO / CFO / 法务 / 财务 / Leo / 佐藤先生 的作用。
3. 之后按章节读 **English → 中文对照**。
4. 最后回到英文原段，专门圈出粗体词做复习。

### 适合发布到网站的原因

- Mermaid 图已经尽量写得更紧凑；
- 结构清晰：图表 → 章节 → 对照；
- 图片路径已写成相对路径，方便静态网站部署；
- Markdown 工具与 GitHub 类网站都比较容易继续加工。
