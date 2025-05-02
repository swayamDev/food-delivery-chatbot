# Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
# © 2025. All rights reserved. For educational and portfolio use only.


import re

def get_str_from_food_dict(food_dict: dict):
    result = ", ".join([f"{int(value)} {key}" for key, value in food_dict.items()])
    return result


def extract_session_id(session_str: str):
    match = re.search(r"/sessions/(.*?)/contexts/", session_str)
    if match:
        extracted_string = match.group(0)
        return extracted_string

    return ""


# Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
# © 2025. All rights reserved. For educational and portfolio use only.