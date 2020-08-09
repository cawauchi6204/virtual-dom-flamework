import React from 'react';

const data = [
  {
    id: 1,
    name: "リオネル・メッシ",
    team: "FCバルセロナ",
    description:
      "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
    isFollow: false,
  },
  {
    id: 2,
    name: "クリスティアーノ・ロナウド",
    team: "Juventus",
    description:
      "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
    isFollow: true,
  },
  {
    id: 3,
    name: "ネイマール",
    team: "パリサンジェルマン",
    description:
      "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
    isFollow: false,
  },
]

function App() {
  const [accounts, setAccounts] = React.useState(data)
  const onClickFollow = React.useCallback((id) => {
    // stateに変更があったときのみ描画が更新されるようにしている
    //アカウントの id を受け取るようにして渡された id が accounts の中に存在していれば isFollow を入れ替えて新しい配列に入れます。
    // その後 setAccounts メソッドに updatedAccounts を渡して accounts を更新します。
    // さらに、accounts が更新されると内部的には仮想 DOM の再構築がまず行われます。そして、before/after で差分があったところだけを再描画がされ画面も更新されます。
    // フォローボタンをクリック
    // state の accounts を更新
    // 仮想 DOM を再構築
    // 仮想 DOM の before/after の差分を検知する
    // 差分があったとこだけ再描画する
    const updatedAccounts = accounts.map((e) => {
      //idが一致する場合isFollowをトグルしているだけ
      if (e.id === id) {
        return {
          ...e,
          isFollow: !e.isFollow,
        }
      } else {
        return e
      }
    })
    setAccounts(updatedAccounts)
  },
    [accounts, setAccounts]
  )
  return (
    <ul className="accountList">
      {accounts.map((e) => {
        return (
          <li key={e.id} className="accountsList__item">
            <div>
              <div className="account__summary">
                <div>
                  <p className="account__name">{e.name}</p>
                  <p className="account__team">{e.team}</p>
                </div>
                <div>
                  <button
                    type="button"
                    className={`followBtn ${e.isFollow ? "isFollow" : ""}`}
                    onClick={() => onClickFollow(e.id)}
                  >
                    {e.isFollow ? "フォロー中" : "フォローする"}
                  </button>
                </div>
              </div>
              <p className="account__description">{e.description}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default App;
