

const useString = () => ({

    sentenceCase: (string="") => {
        return string.replace(/\b\w/g, char => char.toUpperCase());
    }

})

export default useString;