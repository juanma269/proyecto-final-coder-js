const songs = [
    {
      name:"Crazy in Love (ft Jay-Z)",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name:"Naughty Girl",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
      
    },
    {
      name:"Baby Boy (ft Sean Paul)",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name:"Hip Hop Star",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name:"Be with You",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name:"Me, Myself and I",
      artist: "beyonce",
      year:2003
    },
    {
      name: "Signs",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name: "Speechless",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name: "That's How You Like It (ft Jay-Z)",      
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      name:"The Closer I Get to You",
      album: "dangerously in love",
      artist: "beyonce",
      year:2003,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },

    {
      name:"Déjà Vu",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Get Me Bodied",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Suga Mama",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name: "Upgrade U",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Ring the Alarm",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Kitty Kat",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name: "Freakum Dress",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Green Light",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Irreplaceable",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },{
      name:"Check On It",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Listen",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Beautiful Liar", 
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Amor Gitano", 
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Back Up", 
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Creole", 
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Lost Yo Mind",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Encore for the Fans",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"Irreemplazable",
      album: "b'day",
      artist: "beyonce",
      year:2006,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      name:"If I Were a Boy",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Halo",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Disappear",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Broken-Hearted Girl",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Ave Maria",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Satellites",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Smash into You",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"That's Why You're Beautiful",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Diva",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Save the Hero",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Single Ladies (Put a Ring on It)",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Radio",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Sweet Dreams",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Video Phone",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Hello",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Ego",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Scared of Lonely",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"Why Don't you Love Me",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    
    {
      name:"Poison",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    
    {
      name:"Honesty",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    
    {
      name:"Fever",
      album: "i am sasha fierce",
      artist: "beyonce",
      year:2008,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      name:"1+1",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"I Care", 
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"I Miss You",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Best Thing I Never Had",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Party (ft André 3000",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Rather Die Young",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Start Over",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Love on Top",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Countdown",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"End of Time",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"I Was Here",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Run the World (Girls)",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Lay Up Under Me",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Schoolin' Life",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Dance for You",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Dreaming",
      album: "4",
      artist: "beyonce",
      year:2011,
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png",
    },
    {
      name:"Pretty Hurts",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Haunted",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Drunk in Love (ft Jay-Z)",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Blow",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"No Angel",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Partition",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Jealous",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Rocket",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Mine (ft Drake)",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"XO",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"***Flawless",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Superpower",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Heaven",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Blue",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Grown Woman",
      album: "beyonce",
      artist: "beyonce",
      year:2013,
      imageUrl:"https://i.discogs.com/scq1oRmwXZHFZKOEqZkzjH1xvVVbD-9zCmAgepbgfs8/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4OTAz/ODItMTYxMTIyODU1/NC04NDA3LnBuZw.jpeg"
    },
    {
      name:"Pray You Catch Me",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Hold Up",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Don't Hurt Yourself",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Sorry",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"6 Inch (ft The Weeknd)",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Daddy Lessons",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Love Drought",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Sandcastles",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Forward",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Freedom (ft Kendrick Lamar)",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"All Night",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Formation",
      album: "lemonade",
      artist: "beyonce",
      year:2016,
      imageUrl: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2016/05/LEMONADE.jpg"
    },
    {
      name:"Bigger",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Find Your Way Back",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Don't Jealous Me",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Ja Ara E",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Nile",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Mood 4 Eva",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Water",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Brown Skin Girl",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Keys to the Kingdom",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Already",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Otherside",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"My Power",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Scar",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Spirit",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"Black Parade",
      album: "the gift",
      artist: "beyonce",
      year:2019,
      imageUrl: "https://i.discogs.com/TW_D-ESrmgKRqVPmvxv5Rah-iv_nFhi1TCtso3ve6Dg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NjI3/NTAzLTE2MTQ1MjQ3/MTQtNTQ1Mi5qcGVn.jpeg"
    },
    {
      name:"I'm That Girl",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Cozy",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Alien Superstar",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Cuff It",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Energy (ft Beam)",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Break My Soul",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Church Girl",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Plastic off the Sofa",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Virgo's Groove",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Move",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Heated",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Thique",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"All Up in Your Mind",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"America Has a Problem",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Pure/Honey",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name:"Summer Renaissance",
      album: "renaissance",
      artist: "beyonce",
      year:2022,
      imageUrl: "https://m.media-amazon.com/images/I/31Zk63xOu3L._SX300_SY300_QL70_ML2_.jpg"
    },
];