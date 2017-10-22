function hideEmail (email) {
    var split = email.split("@");
    part1 = split[0];
    part2 = split[1];
    part1 = part1.substring(0, (part1.length - part1.length / 2));
    return part1 + "...@" + part2;
}



console.log(hideEmail("davidjocic93@gmial.com"));