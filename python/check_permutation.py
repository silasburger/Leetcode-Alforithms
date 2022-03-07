def check_permutation(s1: str, s2: str) -> bool:
    freqs = make_freq_dictionary(s2)
    size = len(freqs)

    count = size
    tail = 0
    for head in range(len(s1)):
        if s1[head] in s2:
            freqs[s1[head]] -= 1
            if freqs[s1[head]] == 0: 
                count -= 1
        while count == 0:
            if head - tail + 1 == len(s2):
                return True 
            if s1[tail] in s2:
                freqs[s1[tail]] += 1
                count += 1
            tail += 1


    return False



    

def make_freq_dictionary(str1: str) -> dict:
    freqs = {}
    for letter in str1:
        if letter in freqs:
            freqs[letter] += 1
        else:
            freqs[letter] = 1
    return freqs


    


#
#
# 'here'
# 'er'
# true
#
# 
#
# frequency dictionary on s2
# get count of all unique characters
# then gobble up characters and when the count is 0 begin 
# to move second pointer while count is 0. If key character leaves window
# then add to count and frequency dictionary. And repeat phase 1
# if length of window gets as small as s2, then return true
# once window goes away return
