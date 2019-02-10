
function selectionSort(items){
    for (i=0; i < items.length; i++) {
        var min = i;

        for (k=i+1; k < items.length; k++) {
            if (items[k] < items[min]){
                min = k;
            }
        }

        if (i !== min) {
            (function swap(items, firstIndex, secondIndex){
                var temp = items[firstIndex];
                items[firstIndex] = items[secondIndex];
                items[secondIndex] = temp;
            })(items, i, min);
        }
    }
    return items;
}


[
    '123216443658743695943758432675983768943',
    '000000000111111100000000000000000011111',
    'dfasfjasdfghjsadgfagjshd'
].map(str => console.log(selectionSort(str.split(''))) );