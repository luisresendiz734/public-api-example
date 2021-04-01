# public-api-example
A public api example for the Intriduction to Fronted + React course

## Functional base url
```
https://escom-frontend-course.herokuapp.com/students
```

## Docs

### Student Entity
```js
{
  id: string,
  name: string,
  description: string,
}
```

## Supported methods
- ### GET: 
Return a student list.
  - #### Request:
  ```
  No need some request information
  ```
  - #### Response:
  ```js
  {
    "success": true, // on error, false
    "result": Student[]
  }
  ```
  
- ### POST: 
Create a new student.
  - #### Request:
  ```js
  {
    name: string,
    description: string
  }
  ```
  - #### Response:
  ```js
  {
    "success": true, // on error, false
    "result": Student
  }
  ```
  
- ### PUT: 
Update user information.
  - #### Request:
  ```js
  {
    id: string,
    name: string, // optional
    description: string // optional
  }
  ```
  - #### Response:
  ```js
  {
    "success": true, // on error, false
    "result": Student
  }
  ```
  
- ### DELETE: 
Delete a student.
  - #### Request:
  ```js
  {
    id: string
  }
  ```
  - #### Response:
  ```js
  {
    "success": true, // on error, false
  }
  ```
