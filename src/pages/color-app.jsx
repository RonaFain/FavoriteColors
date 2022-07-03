import { useEffect, useState } from 'react'
import { colorService } from '../services/color.service'
import { ColorList } from '../cmps/color-list'

export function ColorApp() {
    const [colors, setColors] = useState(null)

    useEffect(() => {
        loadColors()
    }, [])

    const loadColors = async () => {
        try {
            const colors = await colorService.query()
            setColors(colors)
        } catch (err) {
            console.log('Error in loadColors' , err)
            throw err
        }
    }

    const addVote = (updatedColor) => {
        setColors(prevColors => prevColors.map(color => color._id === updatedColor._id ? updatedColor : color))
    }
    
    const onUpdateColor = async (color) => {
        try {
            const updatedColor = await colorService.update(color)
            addVote(updatedColor)
        } catch (err) {
            console.log('Error in onUpdateColor', err)
            throw err
        }
    }

    const getMaxVotes = () => {
        return colors.reduce((color1, color2) => color1.voteCount > color2.voteCount ? color1 : color2).voteCount
    }

    return (
        <section className="color-app">
            <h2>Favorite Colors</h2>
            {colors && <ColorList colors={colors} onUpdateColor={onUpdateColor} getMaxVotes={getMaxVotes} />}
        </section>
    )
}