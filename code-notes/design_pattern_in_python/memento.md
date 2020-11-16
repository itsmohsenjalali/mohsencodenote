---
title : Implement Memento Pattern
tags:
  - design pattern
emoji: 📏
---
## Why Memento pattern
We want to implement undo feature with memento design pattern.

We want three classes that communication between them displayed in the below UML .
![](../../assets/memento.png)

In this problem Memento class is EditorState and Originator class is Editor and CareTaker class is History.

Editor.java:

```Java

public class Editor {
    private String content;

    public EditorState createState(){
        return new EditorState(content);
    }
    public void restore(EditorState state){
        content = state.getContent();
    }
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

```
EditorState.java:

```Java
public class EditorState {
    private final String content;

    public EditorState(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}
```

History.java:

```Java
import java.util.ArrayList;
import java.util.List;

public class History {
    private List<EditorState> states = new ArrayList<>();

    public void push(EditorState state){
        states.add(state);
    }
    public EditorState pop(){
        var lastIndex = states.size()-1;
        var lastState = states.get(lastIndex);
        states.remove(lastState);
        return lastState;
    }
}
```

memento design pattern in python 

Editor.py
```Python
from .EditorState import Editor_state
class Editor():
    def __init__(self,content=""):
        self.__content = content
    @property
    def content(self):
        return self.__content
    @content.setter
    def content(self,content):
        self.__content = content
    def create_state(self):
        return Editor_state(self.__content)
    def restore(self,state):
        self.__content = state.content
```

EditorState.py

```Python
class Editor_state():
    def __init__(self,content):
        self.__CONTENT = content
    @property
    def content(self):
        return self.__CONTENT
```
History.py

```Python
class History():
    def __init__(self):
        self.__states = []
    def push(self,state):
        self.__states.append(state)
    def pop(self):
        last_index = len(self.__states) - 1
        last_state = self.__states.pop(last_index)
        return last_state
```

check package in main file

main.py

```Python
from memento.History import History
from memento.Editor import Editor

def main():
     editor = Editor()
     history = History()
     editor.content="a"
     history.push(editor.create_state())
     editor.content="b"
     history.push(editor.create_state())
     editor.content="c"
     editor.restore(history.pop())
     print(editor.content)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    main()

```