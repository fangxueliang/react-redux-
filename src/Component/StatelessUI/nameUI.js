import { List, Card } from 'antd';

export const NameUI = (props) => {
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={props.dataList}
            renderItem={item => (
                <List.Item>
                    <Card title={item.title}>{item.content}</Card>
                </List.Item>
            )}
        />
    )
}