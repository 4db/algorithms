/* 841. Keys and Rooms
 * There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, 
 * and each room may have some keys to access the next room. 
 * Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] 
 * is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
 * Initially, all the rooms start locked (except for room 0). 
 * You can walk back and forth between rooms freely.
 * Return true if and only if you can enter every room.
 */
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    var roomsToVisit = [rooms[0]];
    var visited = [true];

    while(roomsToVisit.length > 0) {
        let room = roomsToVisit.pop();
        
        for(let i = 0; i < room.length; i++){
            let key = room[i];
            if (!visited[key]) {
                roomsToVisit.unshift(rooms[key]);
            }
            visited[key] = true;
        }
    }
    
    const visitedCount = visited.filter((room) => !!room).length;
    return rooms.length === visitedCount;
}

console.log('It should return true', canVisitAllRooms([[1],[2],[3],[]]) === true ? 'PASS' : 'FAIL');
