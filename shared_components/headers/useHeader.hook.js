import React, { useState } from 'react';

export default function useHeader() {
    const [searchMode, setSearchMode] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [isVisible, setVisible] = useState(false)

    const cancelSearch = () => {
        setSearchMode(false)
        setKeyword("")
    }

    return {
        searchMode, setSearchMode, keyword, setKeyword, isVisible, setVisible, cancelSearch
    }
}