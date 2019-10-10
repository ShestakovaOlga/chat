import React, { useGlobal } from 'reactn';


export function EmojiList() {
    const emojiList = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉',
        '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩',
        '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪',
        '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑',
        '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩',
        '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷',
        '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫',
        '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺',
        '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
    ]
    const [text, setText] = useGlobal('text')
    const [emojiActive, setemojiActive] = useGlobal('emojiActive')


    return <div style={{
        width: 25,
        height: 20
    }}>
        <button onClick={() => {
            setemojiActive(true)
        }}>
            E
    </button>
        {emojiActive && <div style={{
            border: '1px solid red',
            width: 300,
            height: 220,
            position: "relative",
            bottom: 260,
            right: 250,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: ' row',
                flexWrap: 'wrap',
            }}>{emojiList.map((emoji) => <div style={{
                cursor: 'pointer'
            }} onClick={() => {
                setText(text + emoji)
                setemojiActive(false)
            }}>{emoji}</div>)} </div>
        </div>}
    </div>
}