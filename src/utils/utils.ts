const utils = {
    targetJson: new Map(),

    checkForNested(item) {
        return item.includes('.')
    },

    getKey(item) {
        return {
            idx: item.indexOf('.'),
            keyOfNested() {
                return item.slice(0, this.idx)
            }
        }
    },

    // create object for nested properties
    createNestedObj(item, key) {
        let keyValueArr = item.slice(key.idx + 1).split(' = ');
        this.targetJson.get(key.keyOfNested())[keyValueArr[0]] = keyValueArr[1]
    },

    //create simple prop for nested obj
    createNestedProp(item, key) {
        this.targetJson.set(key.keyOfNested(), {});

        let keyValueArr = item.slice(key.idx + 1).split(' = ');
        this.targetJson.get(key.keyOfNested())[keyValueArr[0]] = keyValueArr[1]
    },

    //create simple prop
    createSimpleProp(item) {
        let keyValueArr = item.split(' = ');
        this.targetJson.set(keyValueArr[0], keyValueArr[1])
    },

    recCheck(item) {
        const key = this.getKey(item)

        this.targetJson.has(key.keyOfNested())
            ? this.createNestedObj(item, key)
            : this.createNestedProp(item, key)
    }
}

export default utils