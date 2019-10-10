import React, { useGlobal } from 'reactn';
import { IoMdHappy, IoIosCloseCircle } from "react-icons/io";


export function EmojiList() {
    const emojiList = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉',
        '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗', '🤩',
        '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪',
        '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑',
        '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩',
        '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷',
        '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫',
        '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖', '💩', '😺',
        '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
    ]
    const [text, setText] = useGlobal('text')
    const [emojiActive, setemojiActive] = useGlobal('emojiActive')


    return <div style={{
        width: 30,
        height: 30,
    }}>
        <button style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            textAlign: 'center',
            marginRight: 5,
            fontSize: '1.3rem',
            border: 'none',
            outline: 'none',
            color: '#815ae6',
        }} onClick={() => {
            setemojiActive(true)
        }}>
            <IoMdHappy />
        </button>
        {emojiActive && <div style={{
            border: '1px solid #E1E1E8',
            borderRadius: 3,
            width: 300,
            height: 220,
            position: "relative",
            bottom: 270,
            right: 250,
            backgroundColor: 'white',
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