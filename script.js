
/**
 * Generates a random number between 0 and the specified maximum value.
*/
const generateRadomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

/**
 * An object containing arrays of fun facts about various sports.
 * Each property of the object represents a sport and contains an array of fun facts related to that sport.
*/

const sportFunFacts = { 
football: [
    "The first-ever FIFA World Cup goal was scored by Lucien Laurent of France in 1930 against Mexico.",
    "Just Fontaine of France scored 13 goals in the 1958 FIFA World Cup, a record that still stands.",
    "Italy went 37 games unbeaten between 2018 and 2021, a record in international football.",
    "Hakan Şükür of Turkey scored just 11 seconds into the match against South Korea in 2002.",
    "Cristiano Ronaldo is the only player to score in five World Cups, achieving this in 2022.",
    "Cameroon became the first African team to reach the World Cup quarterfinals in 1990, inspired by Roger Milla.",
    "The Maracanã Stadium in Rio de Janeiro hosted nearly 200,000 fans during the 1950 World Cup final between Brazil and Uruguay.",
    "Essam El-Hadary of Egypt played at 45 years old in the 2018 FIFA World Cup, making him the oldest player in World Cup history.",
    "The longest match in history lasted 173 hours, played in the UK in 2015 as part of a charity event.",
    "Lev Yashin, the Soviet goalkeeper, is the only goalkeeper to win the Ballon d’Or, achieving this in 1963.",
    "Archie Thompson scored 13 goals for Australia in a 31-0 win over American Samoa in 2001.",
    "Austria defeated Switzerland 7-5 in the 1954 World Cup, the highest-scoring World Cup match.",
    "Ada Hegerberg won the inaugural Ballon d’Or Féminin in 2018.",
    "Ramón Unzaga is credited with popularizing the bicycle kick in the 1910s in Chile.",
    "Sheffield FC, founded in 1857 in England, is recognized as the world's oldest football club."
  ],
basketball: [
    "The first game of basketball was played on December 21, 1891, in Springfield, Massachusetts.",
    "James Naismith, the inventor of basketball, used a soccer ball and peach baskets as goals.",
    "The NBA was founded on June 6, 1946, as the Basketball Association of America (BAA).",
    "Wilt Chamberlain scored 100 points in a single NBA game on March 2, 1962.",
    "Kareem Abdul-Jabbar is the all-time leading scorer in NBA history with 38,387 points.",
    "The Boston Celtics have won the most NBA championships, with 17 titles.",
    "Michael Jordan won six NBA championships with the Chicago Bulls and was named Finals MVP each time.",
    "The shortest player in NBA history is Muggsy Bogues, who stood at 5 feet 3 inches tall.",
    "The tallest player in NBA history is Gheorghe Mureșan, who stood at 7 feet 7 inches tall.",
    "The first WNBA game was played on June 21, 1997, between the New York Liberty and the Los Angeles Sparks.",
    "Lisa Leslie was the first player to dunk in a WNBA game, achieving this on July 30, 2002.",
    "The NBA's three-point line was introduced in the 1979-1980 season.",
    "The Harlem Globetrotters, founded in 1926, are known for their entertaining exhibition basketball games.",
    "The first basketballs were brown, but they were later changed to orange for better visibility.",
    "The NBA Slam Dunk Contest was first held in 1984 and won by Larry Nance."
],
baseball: [
    "The first professional baseball team was the Cincinnati Red Stockings, established in 1869.",
    "Jackie Robinson broke the color barrier in Major League Baseball in 1947.",
    "Babe Ruth hit 714 home runs during his career, a record that stood until 1974.",
    "The New York Yankees have won 27 World Series titles, the most in MLB history.",
    "Nolan Ryan holds the record for the most career strikeouts with 5,714.",
    "The longest professional baseball game lasted 33 innings, played between the Pawtucket Red Sox and the Rochester Red Wings in 1981.",
    "The first World Series was played in 1903 between the Boston Americans and the Pittsburgh Pirates.",
    "Hank Aaron broke Babe Ruth's home run record on April 8, 1974, finishing his career with 755 home runs.",
    "The Chicago Cubs won the World Series in 2016, ending a 108-year championship drought.",
    "Ichiro Suzuki holds the record for the most hits in a single MLB season with 262 in 2004.",
    "The first All-Star Game was played on July 6, 1933, at Comiskey Park in Chicago.",
    "Cal Ripken Jr. played in 2,632 consecutive games, a record in Major League Baseball.",
    "The fastest pitch ever recorded in MLB was thrown by Aroldis Chapman at 105.1 mph.",
    "The Baseball Hall of Fame is located in Cooperstown, New York, and was established in 1936.",
    "The first night game in MLB history was played on May 24, 1935, between the Cincinnati Reds and the Philadelphia Phillies."
],
tennis: [
    "The oldest tennis tournament in the world is Wimbledon, first held in 1877.",
    "Roger Federer holds the record for the most Grand Slam men's singles titles with 20.",
    "Margaret Court holds the record for the most Grand Slam women's singles titles with 24.",
    "The longest tennis match in history lasted 11 hours and 5 minutes, played between John Isner and Nicolas Mahut at Wimbledon in 2010.",
    "Rafael Nadal has won the French Open a record 13 times.",
    "Serena Williams has won 23 Grand Slam singles titles, the most in the Open Era.",
    "The Davis Cup is the premier international team event in men's tennis, first held in 1900.",
    "The first US Open was held in 1881, originally known as the U.S. National Championships.",
    "The Australian Open is the first Grand Slam tournament of the year, held annually in January.",
    "The fastest serve ever recorded in tennis was hit by Sam Groth at 163.7 mph.",
    "Martina Navratilova holds the record for the most Wimbledon singles titles with 9.",
    "The ATP Tour was established in 1990, organizing the worldwide professional men's tennis circuit.",
    "The WTA Tour was founded in 1973 by Billie Jean King to organize the professional women's tennis circuit.",
    "The first Olympic tennis tournament was held in 1896, but it was reintroduced in 1988 after being dropped in 1924.",
    "The Hopman Cup is a mixed-gender team tennis tournament held annually in Perth, Australia."
],
cricket: [
    "The first recorded cricket match took place in 1646 in Kent, England.",
    "The Ashes is a historic Test cricket series played between England and Australia, first contested in 1882.",
    "Sachin Tendulkar holds the record for the most runs in international cricket with over 34,000 runs.",
    "The first Cricket World Cup was held in 1975 in England, and the West Indies emerged as the champions.",
    "Brian Lara holds the record for the highest individual score in a Test match with 400 not out.",
    "Muttiah Muralitharan holds the record for the most wickets in international cricket with 1,347.",
    "The Indian Premier League (IPL) is one of the most popular T20 cricket leagues in the world, established in 2008.",
    "The first One Day International (ODI) match was played between Australia and England in 1971.",
    "The ICC Women's Cricket World Cup was first held in 1973, two years before the men's tournament.",
    "Don Bradman is widely regarded as the greatest batsman of all time, with a Test batting average of 99.94.",
    "The first T20 International match was played between Australia and New Zealand in 2005.",
    "The highest team score in a Test match is 952/6 declared by Sri Lanka against India in 1997.",
    "The first official Laws of Cricket were codified in 1744.",
    "The ICC Champions Trophy is a prestigious ODI tournament, first held in 1998.",
    "The first pink-ball Test match was played between Australia and New Zealand in 2015."
],
golf: [
    "The oldest golf tournament in the world is The Open Championship, first held in 1860.",
    "Jack Nicklaus holds the record for the most major championships with 18.",
    "Tiger Woods won the Masters Tournament in 1997 at the age of 21, becoming the youngest champion.",
    "The Ryder Cup is a biennial team competition between Europe and the United States, first held in 1927.",
    "The first golf course in the United States was established in 1888 in Yonkers, New York.",
    "The longest hole-in-one ever recorded was 517 yards by Mike Crean in 2002.",
    "The Augusta National Golf Club hosts the annual Masters Tournament, one of the four major championships.",
    "The first Women's British Open was held in 1976, and it became a major championship in 2001.",
    "The PGA Tour was established in 1929 and is the main professional golf tour in the United States.",
    "The first U.S. Open was held in 1895 at the Newport Country Club in Rhode Island.",
    "Annika Sörenstam is one of the most successful female golfers, with 10 major championships.",
    "The first golf balls were made of leather and stuffed with feathers.",
    "The Solheim Cup is a biennial team competition between Europe and the United States for female golfers, first held in 1990.",
    "The first golf club in the world was the Royal and Ancient Golf Club of St Andrews, founded in 1754.",
    "Phil Mickelson became the oldest major champion in history by winning the 2021 PGA Championship at the age of 50."
],
hockey: [
    "The first organized indoor hockey game was played in Montreal, Canada, in 1875.",
    "Wayne Gretzky holds the record for the most points in NHL history with 2,857.",
    "The Stanley Cup is the oldest professional sports trophy in North America, first awarded in 1893.",
    "The Miracle on Ice refers to the U.S. hockey team's victory over the Soviet Union in the 1980 Winter Olympics.",
    "The Montreal Canadiens have won the most Stanley Cup championships, with 24 titles.",
    "The first Winter Olympics to include ice hockey was held in 1924 in Chamonix, France.",
    "Gordie Howe played professional hockey for five decades, earning the nickname 'Mr. Hockey.'",
    "The NHL was founded on November 26, 1917, in Montreal, Canada.",
    "The fastest slapshot ever recorded was 108.8 mph, hit by Zdeno Chara in 2012.",
    "The first women's ice hockey world championship was held in 1990.",
    "The Hockey Hall of Fame is located in Toronto, Canada, and was established in 1943.",
    "The first outdoor NHL game was the Heritage Classic, played in 2003 between the Edmonton Oilers and the Montreal Canadiens.",
    "The Detroit Red Wings are known as the 'Original Six' team, one of the six teams that made up the NHL from 1942 to 1967.",
    "The first NHL All-Star Game was held in 1947 at the Toronto Maple Leafs' Maple Leaf Gardens.",
    "The Art Ross Trophy is awarded annually to the NHL player who leads the league in points at the end of the regular season."
],
rugby: [
    "The first rugby match was played in 1823 at Rugby School in England.",
    "The Rugby World Cup was first held in 1987, with New Zealand emerging as the champions.",
    "Jonny Wilkinson scored the winning drop goal for England in the 2003 Rugby World Cup final.",
    "The All Blacks, New Zealand's national rugby team, are known for their pre-match haka, a traditional Maori war dance.",
    "The Six Nations Championship is an annual rugby tournament involving England, France, Ireland, Italy, Scotland, and Wales.",
    "The first international rugby match was played in 1871 between Scotland and England.",
    "The British and Irish Lions is a team composed of players from England, Ireland, Scotland, and Wales, touring every four years.",
    "The Rugby Sevens format, featuring seven players per team, was introduced in 1883 in Melrose, Scotland.",
    "The first Women's Rugby World Cup was held in 1991, with the United States winning the inaugural tournament.",
    "The Bledisloe Cup is a rugby competition between Australia and New Zealand, first contested in 1931.",
    "The Tri Nations, now known as The Rugby Championship, is an annual tournament involving Argentina, Australia, New Zealand, and South Africa.",
    "The first professional rugby league was established in 1895 in Northern England.",
    "The Webb Ellis Cup is awarded to the winner of the Rugby World Cup, named after William Webb Ellis, who is credited with inventing rugby.",
    "The first rugby union club was the Guy's Hospital Football Club, founded in London in 1843.",
    "The Varsity Match is an annual rugby match between Oxford and Cambridge universities, first played in 1872."
]
}

// Store sportChoice in an array
let sportChoice = [];

// Generate a random fun fact for the specified sport
const getRandomFunFact = (sport) => {
    if (sportFunFacts[sport]) {
        let optionIdx = generateRadomNumber(sportFunFacts[sport].length);
        console.log(`${sport.charAt(0).toUpperCase() + sport.slice(1)} Fun Fact: "${sportFunFacts[sport][optionIdx]}".`);
    } else {
        console.log('No fun facts available for this sport.');
    }
}

// Example usage:
getRandomFunFact('football');
