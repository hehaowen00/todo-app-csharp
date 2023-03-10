const TODO_ENDPOINT = '/api/todos';
const ITEM_ENDPOINT = '/api/todo';

export async function GetTodos(token, listId) {
  try {
    let resp = await fetch(TODO_ENDPOINT + `/${listId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (resp.status === 401) {
      return { error: true, unauthorized: true };
    }

    if (resp.ok) {
      let todos = await resp.json();
      return { error: false, todos };
    }

    return { error: true, message: await resp.json() };
  } catch (error) {
    return {
       error: true,
       unauthorized: true,
       message: 'Failed to connect to server'
    };
  }
}

export async function GetTodo(token, itemId) {
  try {
    let resp = await fetch(ITEM_ENDPOINT + `/${itemId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (resp.status === 401) {
      return { error: true, unauthorized: true };
    }

    if (resp.ok) {
      let item = await resp.json();
      return { error: false, item };
    }

    return { error: true, message: await resp.json() };
  } catch (error) {
    return {
       error: true,
       unauthorized: true,
       message: 'Failed to connect to server'
    };
  }
}

export async function AddTodo(token, listId, desc) {
  try {
    let resp = await fetch(TODO_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        'list_id': listId,
        'desc': desc,
      })
    });

    if (resp.status === 401) {
      return { error: true, unauthorized: true };
    }

    if (resp.ok) {
      let item = await resp.json();
      return { error: false, item };
    }

    return { error: true, message: await resp.json() };
  } catch (error) {
    return {
       error: true,
       unauthorized: true,
       message: 'Failed to connect to server'
    };
  }
}

export async function UpdateTodo(token, todo) {
  try {
    let resp = await fetch(TODO_ENDPOINT, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(todo),
    });

    if (resp.status === 401) {
      return { error: true, unauthorized: true };
    }

    if (resp.ok) {
      let item = await resp.json();
      return { error: false, item };
    }

    return { error: true, message: await resp.json() };
  } catch (error) {
    return {
       error: true,
       unauthorized: true,
       message: 'Failed to connect to server'
    };
  }
}

export async function DeleteTodo(token, todo) {
  try {
    let resp = await fetch(TODO_ENDPOINT, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(todo),
    });

    if (resp.status === 401) {
      return { error: true, unauthorized: true };
    }

    if (resp.ok) {
      return { error: false };
    }

    return { error: true, message: await resp.json() };
  } catch (error) {
    return {
       error: true,
       unauthorized: true,
       message: 'Failed to connect to server'
    };
  }
}