result=$(node .)
image="$(pwd)/pirate-export.svg"
notify-send -u critical -i $image 'piracy' $result