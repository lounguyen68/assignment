// Thuật toán
// Hàm tìm kiếm nhị phân
let searchBinary = (a, target) => {
    let l = 0, r = a.length-1;
    let recursive = (l, r) => {
        if (l == r ) return -1;
        let m = (l+r)/2;
        if (a[m] === target) return m;
        if (a[m] < target) recursive(l,m-1); else recursive(m+1,r);
    }
    return recursive(l, r);
}
// DB
let query = 
`SELECT 
    p.firstName,
    p.lastName,
    a.city,
    a.state
FROM Person p LEFT JOIN Address a ON p.personId = a.personId;
`


