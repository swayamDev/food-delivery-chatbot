# Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
# © 2025. All rights reserved. For educational and portfolio use only.


import mysql.connector
global cnx

# Establish MySQL database connection
cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="@M1y2s3q4l5",
    database="indian_flavors"
)

def insert_order_item(food_item, quantity, order_id):
    """
    Inserts a food item into the orders table using a stored procedure.
    Returns 1 on success, -1 on failure.
    """
    try:
        cursor = cnx.cursor()
        cursor.callproc('insert_order_item', (food_item, quantity, order_id))
        cnx.commit()
        cursor.close()
        print("Order item inserted successfully!")
        return 1
    except mysql.connector.Error as err:
        print(f"Error inserting order item: {err}")
        cnx.rollback()
        return -1
    except Exception as e:
        print(f"An error occurred: {e}")
        cnx.rollback()
        return -1

def insert_order_tracking(order_id, status):
    """
    Inserts the order status into the order_tracking table.
    """
    cursor = cnx.cursor()
    insert_query = "INSERT INTO order_tracking (order_id, status) VALUES (%s, %s)"
    cursor.execute(insert_query, (order_id, status))
    cnx.commit()
    cursor.close()

def get_total_order_price(order_id):
    """
    Retrieves the total price of an order using a SQL function.
    """
    cursor = cnx.cursor()
    query = f"SELECT get_total_order_price({order_id})"
    cursor.execute(query)
    result = cursor.fetchone()[0]
    cursor.close()
    return result

def get_next_order_id():
    """
    Retrieves the next available order_id by checking the highest current ID.
    """
    cursor = cnx.cursor()
    query = "SELECT MAX(order_id) FROM orders"
    cursor.execute(query)
    result = cursor.fetchone()[0]
    cursor.close()
    return 1 if result is None else result + 1

def get_order_status(order_id):
    """
    Fetches the order status from the order_tracking table.
    Returns the status string or None if not found.
    """
    cursor = cnx.cursor()
    query = f"SELECT status FROM order_tracking WHERE order_id = {order_id}"
    cursor.execute(query)
    result = cursor.fetchone()
    cursor.close()
    return result[0] if result else None

# Debug/test block (can be used during development)
if __name__ == "__main__":
    print(get_next_order_id())


# Developed by Swayam Swarup Panda for the A.R.T.I. (Annapurna’s Restaurant Talking Interface) project.
# © 2025. All rights reserved. For educational and portfolio use only.