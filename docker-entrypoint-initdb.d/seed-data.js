for (let i = 0; i < 12; i++) {
    db.comments.insert({
        'pasteId' : i,
        'ownerId' : 1,
        'comment' : 'check out this amazing comment!!' 
    })
}

//db.comments.createIndex({'comment':'text'})