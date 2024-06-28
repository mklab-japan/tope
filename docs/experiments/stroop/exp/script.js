// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "stroopope",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "StroopOPE",
    "description": "",
    "repository": "https:\u002F\u002Fgithub.com\u002Fmklab-japan\u002Fope",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let participantID = this.random.uuid4()

//作成した(または読み込んだ)参加者番号をlab.jsに読み込む
this.options.templateParameters.push
(
  {
    participantID: participantID
  }
)
}
      },
      "title": "Global loop",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実施します。準備ができたら，下のボタンを押してください。",
          "hint": "\u003Cbutton\u003Eフルスクリーンを許可する\u003C\u002Fbutton\u003E",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Global Sequence",
        "content": [
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Briefing",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "text",
                    "title": "ご参加ありがとうございます。",
                    "content": "本実験・調査の実施者・実施責任者は山形大学の小林正法です。本実験・調査への参加はあなたの任意によるものです。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "本実験・調査の目的",
                    "content": "感情処理について調べることが本実験・調査の目的です。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "本実験・調査の手続き",
                    "content": "本実験・調査では単語の色の分類判断を行っていただきます。この実験・調査の所要時間は10〜20分程度です。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "潜在的なリスク・苦痛など",
                    "content": "実験による多少の疲労は除き，潜在的なリスクや苦痛はありません。また，いつ，いかなる理由でも，自由に実験を中止していただけます（参加と中止もご参照ください）。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "参加による利益",
                    "content": "あなたが本実験・調査に参加することで学習，認知，感情についての研究を発展に繋がります。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "匿名性の確保",
                    "content": "本実験・調査によって得られた情報は法律による開示請求を除き，匿名性が維持されます。匿名性は実験参加者番号の付与，統計的解析によって保たれます。収集されたデータは匿名化した上で，統計的処理を行い，論文や学会発表で公表されます。また，二次分析などを目的とし，匿名化した上で各個人のデータを公表する場合があります。これらの場合に個人が特定される形でデータが公表されることは決してありません。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "参加と中止",
                    "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。また，参加した場合でも，いつでも，どのような理由でも，途中で実験・調査を中止することができます。もし，途中で実験・調査を中止したくなった場合は，「ESCキー」を押した後，ウィンドウを閉じることで実験・調査を中止できます。"
                  },
                  {
                    "required": true,
                    "type": "text",
                    "title": "実験・調査実施者への問い合わせ",
                    "content": "本実験・調査に対して質問がある場合は，実施者または実施責任者にお問い合わせください。"
                  },
                  {
                    "required": true,
                    "type": "checkbox",
                    "options": [
                      {
                        "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
                        "coding": "yes"
                      }
                    ],
                    "label": "\u003Cspan style = \"color: tomato\"\u003E実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。\u003C\u002Fspan\u003E",
                    "name": "IC"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "\u003E\u003E次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "informedConsent",
                "width": "l"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "input",
                    "label": "年齢",
                    "attributes": {
                      "type": "number",
                      "min": "18",
                      "max": "99"
                    },
                    "help": "年齢を半角数字で入力してください。",
                    "name": "age"
                  },
                  {
                    "required": true,
                    "type": "radio",
                    "label": "性別",
                    "options": [
                      {
                        "label": "男性",
                        "coding": "M"
                      },
                      {
                        "label": "女性",
                        "coding": "F"
                      },
                      {
                        "label": "上記以外",
                        "coding": "O"
                      }
                    ],
                    "name": "sex"
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "識別コード1",
                    "name": "leve1_ID",
                    "help": "大学の授業などで指示があった場合にご記入ください（特に指示がない場合は空欄のままでかまいません）"
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "識別コード2",
                    "name": "level2_ID",
                    "help": "大学の授業などで指示があった場合にご記入ください（特に指示がない場合は空欄のままでかまいません）"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "demographic",
                "width": "l"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Instructions",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "本実験にご参加ありがとうございます。",
                    "content": "本実験では，画面に表示された単語の「文字色」を判断するという課題に取りくんでいただきます。"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  \u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "instruction",
                "width": "l"
              },
              {
                "type": "lab.html.Form",
                "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan id = \"item\" style = \"color:red; font-size:6vh\"\u003E練習\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform id = \"choice\"\u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "end": function anonymous(
) {
const response = this.data.response
const correctResponse = "red"

if(response == correctResponse)
{
  this.data.correct = 1;
}

else
{
  this.data.correct = 0;
}
},
                  "run": function anonymous(
) {
const instSteps = [{
    title: '課題の説明',
    intro: 'これから課題の内容を説明します。画面をご覧ください。'
  },
  {
    element: document.querySelector('#item'),
    intro: '画面中央にこのように文字が表示されます。文字の色が何色かを「できるだけ速くかつ正確に」判断してください。'
  },
  {
    element: document.querySelector('#choice'),
    intro: 'その後，文字の色を選択していただきます。'
  },
  {
    intro: 'では，実際にやってみましょう。ここでは，「あか」と選択し，「OK」をクリックしてください。'
  },]

introJs().setOptions({
  nextLabel: '次へ',
  prevLabel: '戻る',
  doneLabel: 'OK',
  steps: instSteps
}).start();
}
                },
                "title": "inst_item"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"1\" ? \"○\" : \"×\"}\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "timeout": "500",
                "tardy": true
              },
              {
                "type": "lab.html.Page",
                "items": [],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "blank",
                "timeout": "500"
              },
              {
                "type": "lab.html.Form",
                "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan id = \"item\" style = \"color:blue; font-size:6vh\"\u003E練習\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform id = \"choice\"\u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                "scrollTop": true,
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "end": function anonymous(
) {
const response = this.data.response
const correctResponse = "blue"

if(response == correctResponse)
{
  this.data.correct = 1;
}

else
{
  this.data.correct = 0;
}
},
                  "run": function anonymous(
) {
const instSteps = [{
    title: 'もう一度練習してみましょう',
    intro: 'では，もう一度，練習してみましょう。'
  },
  {
    element: document.querySelector('#item'),
    intro: '先ほどと文字の意味は同じですが，先ほどと異なり，文字色は「あお」です。'
  },
  {
    element: document.querySelector('#choice'),
    intro: 'したがって，「あお」と選ぶと正解となります。では，実際に「あお」と選んで「OK」を押してください。'
  },]

introJs().setOptions({
  nextLabel: '次へ',
  prevLabel: '戻る',
  doneLabel: 'OK',
  steps: instSteps
}).start();
}
                },
                "title": "inst_item"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"1\" ? \"○\" : \"×\"}\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "feedback",
                "timeout": "500",
                "tardy": true
              },
              {
                "type": "lab.html.Page",
                "items": [],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "blank",
                "timeout": "500"
              }
            ]
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "では，次に，練習を行ってみましょう。",
                "content": "本番と同じように画面上に色々な単語が表示されます。\n\u003Cbr\u003E今度は，「赤，青，緑，黄」の4種類のいずれかの色の単語が表示されます。\n\u003Cbr\u003E表示された単語の色を，\u003Cspan style = \"color:red\"\u003E\u003Cstrong\u003E「できるだけ速くかつ正確に」\u003C\u002Fstrong\u003E\u003C\u002Fspan\u003E回答してください。\n\u003Cbr\u003E\n\u003Cbr\u003E準備ができたら，「次へ」をクリックしてください。\n\u003Cbr\u003E\u003Cspan style = \"font-size:1.5vh; color: gray\"\u003E（途中で実験を中止したい方は，ESCキーを押して全画面表示を解除し，ウィンドウを閉じてください）\u003C\u002Fspan\u003E"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  \u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ready",
            "width": "l"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "start",
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n\u003Cdiv\u003E\n  \u003Cspan style = \"font-size:4vh\"\u003ESTART!\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
            "timeout": "1000"
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "赤",
                "color": "green",
                "condition": "incongruent"
              },
              {
                "item": "赤",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "green",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "green",
                "condition": "incongruent"
              }
            ],
            "sample": {
              "mode": "draw-shuffle",
              "n": "8"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "practiceBlock",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "trial",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan style = \"color:black; font-size:6vh\"\u003E+\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform style=\"visibility: hidden;\" \u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                  "scrollTop": true,
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "fixation",
                  "timeout": "500"
                },
                {
                  "type": "lab.html.Form",
                  "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan style = \"color:${this.parameters.color}; font-size:6vh\"\u003E${this.parameters.item}\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform \u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                  "scrollTop": true,
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "end": function anonymous(
) {
const response = this.data.response
const correctResponse = this.parameters.color

if(response == correctResponse)
{
  this.data.correct = 1;
}

else
{
  this.data.correct = 0;
}
}
                  },
                  "title": "practice_item"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"1\" ? \"○\" : \"×\"}\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "feedback",
                  "timeout": "500",
                  "tardy": true
                },
                {
                  "type": "lab.html.Page",
                  "items": [],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "blank",
                  "timeout": "500"
                }
              ]
            }
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "練習おつかれさまでした！",
                "content": "本番でも同様に，画面に表示された単語の「文字色」を\u003Cspan style = \"color:red\"\u003E\u003Cstrong\u003E「できるだけ速くかつ正確に」\u003C\u002Fstrong\u003E\u003C\u002Fspan\u003E回答してください。"
              },
              {
                "required": true,
                "type": "text",
                "title": "続いて本番を実施します。本番では回答の正誤は表示しません。",
                "content": "準備ができた方は「次へ」をクリックして，本番を開始してください。\n\u003Cbr\u003E\u003Cspan style = \"font-size:1.5vh; color: gray\"\u003E（途中で実験を中止したい方は，ESCキーを押して全画面表示を解除し，ウィンドウを閉じてください）\u003C\u002Fspan\u003E"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  \u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "ready",
            "width": "l"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "start",
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n\u003Cdiv\u003E\n  \u003Cspan style = \"font-size:4vh\"\u003ESTART!\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
            "timeout": "1000"
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "red",
                "condition": "congruent"
              },
              {
                "item": "青",
                "color": "blue",
                "condition": "congruent"
              },
              {
                "item": "緑",
                "color": "green",
                "condition": "congruent"
              },
              {
                "item": "黄",
                "color": "gold",
                "condition": "congruent"
              },
              {
                "item": "赤",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "赤",
                "color": "green",
                "condition": "incongruent"
              },
              {
                "item": "赤",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "green",
                "condition": "incongruent"
              },
              {
                "item": "青",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "緑",
                "color": "gold",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "red",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "blue",
                "condition": "incongruent"
              },
              {
                "item": "黄",
                "color": "green",
                "condition": "incongruent"
              }
            ],
            "sample": {
              "mode": "draw-shuffle",
              "n": "${this.parameters.nTrials}"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {
              "nTrials": "48"
            },
            "messageHandlers": {},
            "title": "mainBlock",
            "notes": "nTrialsに入れた値が全試行数（デフォルトは48）になります。文字と文字色がそれぞれ4種類ありますが，今回は文字と文字色の一致の有無の出現頻度を揃えるため，一致条件12試行，不一致条件12試行とした24試行が最小単位になります。試行数を変更する場合は24の倍数にすることを推奨します。",
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "trial",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan style = \"color:black; font-size:6vh\"\u003E+\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform style=\"visibility: hidden;\" \u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                  "scrollTop": true,
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "fixation",
                  "timeout": "500"
                },
                {
                  "type": "lab.html.Form",
                  "content": " \u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n  \u003Cdiv class=\"w-l content-horizontal-center content-vertical-center\"\u003E\n    \u003Cspan style = \"color:${this.parameters.color}; font-size:6vh\"\u003E${this.parameters.item}\u003C\u002Fspan\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"w-l\"\u003E\n  \u003Cdiv class=\"content-horizontal-space-around content-vertical-center\"\u003E\n    \u003Cform \u003E\n      \u003Cdiv class=\"w-l alert\" \u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-blue\" name=\"response\" value=\"blue\"  required\u002F\u003E\n        \u003Clabel for=\"blue\"\u003Eあお\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-red\" name=\"response\" value=\"red\"  \u002F\u003E\n        \u003Clabel for=\"red\"\u003Eあか\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-green\" name=\"response\" value=\"green\"  \u002F\u003E\n        \u003Clabel for=\"green\"\u003Eみどり\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n        \u003Cspan\u003E\u003Cinput class = \"choice\" type=\"radio\" id=\"response-gold\" name=\"response\" value=\"gold\"  \u002F\u003E\n        \u003Clabel for=\"gold\"\u003Eきいろ\u003C\u002Flabel\u003E\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv  class=\"w-m\"\u003E\n        \u003Cbutton type=\"submit\"\u003EOK\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                  "scrollTop": true,
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "end": function anonymous(
) {
const response = this.data.response
const correctResponse = this.parameters.color

if(response == correctResponse)
{
  this.data.correct = 1;
}

else
{
  this.data.correct = 0;
}
}
                  },
                  "title": "item"
                },
                {
                  "type": "lab.html.Page",
                  "items": [],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "blank",
                  "timeout": "500"
                }
              ]
            }
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Deberifing",
            "content": [
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "end": function anonymous(
) {
study.end()
}
                },
                "title": "send_data",
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "今回のデータのダウンロードについて",
                        "content": "今回行っていただいた調査・実験のデータをご自身で保存していただけます。ダウンロードを希望されるかをお教えください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなた自身でデータを保存（ダウンロード）しますか？",
                        "options": [
                          {
                            "label": "はい，ダウンロードします。",
                            "coding": "1"
                          },
                          {
                            "label": "いいえ，ダウンロードしません。",
                            "coding": "0"
                          }
                        ],
                        "name": "download",
                        "help": "「はい」を選んだ場合は次の画面で「data.csv」として，あなたのデータをダウンロードすることができます。"
                      },
                      {
                        "required": true,
                        "type": "text",
                        "content": "\u003Cp\u003E今回行っていただいた調査・実験データは匿名化された上でこのプログラム終了後に公開データ（オープンデータ）として保存・公開されます。\u003Cbr\u003Eただし，以下の点に当てはまる場合は，データの公開を行わないことも可能です。\u003C\u002Fp\u003E\n\n\u003Col\u003E\n\u003Cli\u003Eデータの公開を希望しない場合（データを除外してほしい場合）\u003C\u002Fli\u003E\n\u003Cli\u003E挙動確認，体験，デモなどを目的に調査・実験を行った場合（ランダムに反応した場合を含む）\u003C\u002Fli\u003E\n\u003Cli\u003E実験・調査の実施中に実施に支障がある大きな問題が生じた場合（例. プログラムの予期せぬ動作，来客，電話，誰かに話しかけられたなど）\u003C\u002Fli\u003E\n\u003Cli\u003E過去に同一の調査・実験に参加したことがある場合\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cdiv class=\"alert alert-danger\"\u003E\n\u003Cp\u003E適切に実験に参加された場合は，可能な限り，データの公開（オープンデータ）にご協力いただければ幸いです。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003E以上の点を踏まえて，以下の問いにご回答ください。\u003C\u002Fp\u003E\n",
                        "title": "データの公開について"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたのデータをオープンデータとして保存してもよいでしょうか？",
                        "options": [
                          {
                            "label": "はい，オープンデータとしての保存に同意します。",
                            "coding": "1"
                          },
                          {
                            "label": "いいえ，オープンデータとしての保存には同意しません。",
                            "coding": "0"
                          }
                        ],
                        "name": "opendata",
                        "help": ""
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv class = \"content-horizontal-center\"\u003E\n  \u003Cbutton\u003E次へ\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "dataQuestions",
                    "width": "l"
                  },
                  {
                    "type": "lab.html.Screen",
                    "files": {},
                    "responses": {
                      "click button#next": "end"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.events['click button#download'] =()=>{
  const ds = this.options.datastore
ds.download()
}
},
                      "run": function anonymous(
) {
const ds = this.options.datastore
ds.download()
}
                    },
                    "title": "download",
                    "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class = \"w-l\"\u003E\n  \u003Cdiv\u003E\n    \u003Cp style=\"text-align: left\"\u003Eダウンロードが自動的に始まらない方は以下のボタンをクリックしてください。\n    \u003C\u002Fp\u003E\n    \u003Cp\u003E\n      \u003Cbutton id = \"download\"\u003Eダウンロードする\u003C\u002Fbutton\u003E\n    \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv\u003E\n    \u003Cp\u003E\u003Cbutton id = \"next\"\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
                    "skip": "${this.state.download != 1}",
                    "tardy": true
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "\u003Cspan style = \"color: tomato\"\u003E実験・調査終了です。ありがとうございました！\u003C\u002Fspan\u003E",
                        "content": "「終了」ボタンを押して終了してください。"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cbutton\u003E終了\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "run": function anonymous(
) {
//check Tardy

//日付
let d = new Date();
let date = d.getFullYear() + ("0"+(d.getMonth()+1)).slice(-2) + ("0"+d.getDate()).slice(-2) +  ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2);

//日付 + ファイル名をユーザーIDにする
const participantID = this.parameters.participantID

//csvファイルで保存する場合
const filename = date + "_" + participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "3OEFWMAqoRwW",
    filename: filename,
    data: data,
  }),
});
}
                    },
                    "title": "thanks_with_send_data",
                    "tardy": true,
                    "skip": "${this.state.opendata != 1}"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "\u003Cspan style = \"color: tomato\"\u003E実験・調査終了です。ありがとうございました！\u003C\u002Fspan\u003E",
                        "content": "「終了」ボタンを押して終了してください。"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cbutton\u003E終了\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "thanks_without_send_data",
                    "tardy": true,
                    "skip": "${this.state.opendata != 0}"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()