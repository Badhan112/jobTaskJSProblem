const rotate = (n, d, arr) => {
    for (let c = 1; c <= d; c++) {
        let i = 0;
        const temp = arr[i];
        while (i < n - 1) {
            arr[i] = arr[i + 1];
            i++;
        }
        arr[n - 1] = temp;
    }

    console.log(arr);
}

rotate(5, 4, [1, 2, 3, 4, 5]);
rotate(5, 3, [1, 2, 3, 4, 5]);
rotate(5, 2, [1, 2, 3, 4, 5]);