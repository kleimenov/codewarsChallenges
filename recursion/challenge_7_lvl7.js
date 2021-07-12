const replicate = (times, number) => {
    return times > 0 ? Array(times).fill(number) : [];
}

console.log(replicate(2,10))